import * as storage from '../storage'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { getCookie, saveCookie, signOut } from '../../utils/authService'
const state = {
  token: getCookie('token') || null,
  user: null
}

export default {
  state,
  getters,
  actions,
  mutations
}
