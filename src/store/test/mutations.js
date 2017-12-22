import * as type from './mutations_types'
import * as storage from '../storage'
import todo from '../../api/todo'
export default {
  [type.MUT_TEST_ADD] (states, obj) {
    console.log(todo)
    states.count++
    obj.items.id = states.count
    states.event.unshift(obj.items)
    storage.local.set(states)
  }
}
