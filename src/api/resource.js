import Vue from 'vue'
import VueResource from 'vue-resource'
import { getCookie, signOut, isLogin } from '../utils/authService'
Vue.use(VueResource)

// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next) => {
  // 这里对请求体进行处理
  request.headers = request.headers || {}
  if (isLogin()) {
    request.headers.set('token', localStorage.getItem('token').replace(/(^\")|(\"$)/g, ''))
  }
  next((response) => {
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }
  })
})

export const UserResource = {
  login: Vue.resource('api/login')
}

export const APIResource = {
  test: {
    test: Vue.resource('/api/test'),
    testPost: Vue.resource('/api/testPost'),
    testDelete: Vue.resource('/api/testDelete'),
    testPut: Vue.resource('/api/testUpdate')
  }
}