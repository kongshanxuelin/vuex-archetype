import Vue from 'vue'
import Router from 'vue-router'
import { isLogin } from '../utils/authService'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: {
        requiresNotAuth: true
      },
      component: resolve => require(['../pages/Index'], resolve)
    },
    {
      path: '/admin',
      component: resolve => require(['../pages/Home'], resolve),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/',
          component: resolve => require(['../pages/Manager'], resolve)
        },
        {
          path: 'api-kv',
          component: resolve => require(['../pages/APIKV'], resolve)
        },
        {
          path: 'api-dfs',
          component: resolve => require(['../pages/APIDFS'], resolve)
        },
        {
          path: 'api-menu',
          component: resolve => require(['../pages/APICusMenu'], resolve)
        },
        {
          path: 'slt-logging',
          component: resolve => require(['../pages/SLTLogging'], resolve)
        },
        {
          path: 'slt-datasync',
          component: resolve => require(['../pages/SLTDataSync'], resolve)
        },
        {
          path: 'slt-filesync',
          component: resolve => require(['../pages/SLTFileSync'], resolve)
        },
        {
          path: 'mnt-logging',
          component: resolve => require(['../pages/MNTLogging'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../pages/Login'], resolve),
      meta:{
        requiresNotAuth: true
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  if(to.path === '/'){
    next()
  }else{
    if (to.matched.some(record => record.meta.goTop)) {
      window.scroll(0, 0)
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isLogin()) {
        return next({ path: '/login' })
      }
    }
    if (to.matched.some(record => record.meta.requiresNotAuth)) {
      if (isLogin()) {
        return next({ path: '/admin' })
      }
    }
    next()
  }
})


export default router
