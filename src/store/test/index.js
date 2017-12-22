import * as storage from '../storage'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
const state = storage.local.get() || {
  event: [],
  count: 0
}

export default {
  state,
  getters,
  actions,
  mutations
}
