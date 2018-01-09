import Vue from 'vue'
import VueResource from 'vue-resource'
import { UserResource } from './resource'
export default {
  login(store, userInfo) {
    return UserResource.login.get({ username: userInfo.username, password: userInfo.pass })
  }
}
