import {
  LOGIN_SUCCESS,
  USERINFO_SUCCESS,
  USERINFO_FAILURE,
  LOGOUT_USER,
  UPDATE_USER_SUCCESS
} from './mutations_types'
import * as storage from '../storage'
import { getCookie, saveCookie, signOut } from '../../utils/authService'
export default {
  [LOGIN_SUCCESS](state, action) {
    state.token = action.token
  },
  [USERINFO_SUCCESS](state, action) {
    state.user = action.user
  },
  [USERINFO_FAILURE](state, action) {
    state.user = null
  },
  [LOGOUT_USER](state, action) {
    state.token = getCookie('token') || null
    state.user = null
    state.token = null
  },
  [UPDATE_USER_SUCCESS](state, action) {
    state.user = action.user
  }
}
