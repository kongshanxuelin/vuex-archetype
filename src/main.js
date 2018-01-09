// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import 'babel-polyfill'

import '../theme/index.css'

import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
