import * as type from './mutations_types'
export default {
  add: ({ commit }, param) => commit(type.MUT_TEST_ADD, { items: param })
}
