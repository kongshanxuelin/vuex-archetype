import * as type from './mutations_types'
import api from '../../api/login.js'
import { getCookie, saveCookie, signOut } from '../../utils/authService'
export default {
  logout({ commit }) {
    signOut()
    commit(LOGOUT_USER)
    window.location.pathname = '/'
  },
  login(store,userInfo){
    return api.login(store, userInfo)
  }
}
