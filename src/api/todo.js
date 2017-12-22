const _TODOList = [
    { 'id': 1, 'content': 'thing1 ready', 'sts': 0 },
    { 'id': 2, 'content': 'thing2 ready', 'sts': 0 },
    { 'id': 3, 'content': 'thing3 done', 'sts': 1 },
    { 'id': 4, 'content': 'thing4 canel', 'sts': 2 },
    { 'id': 5, 'content': 'thing5 done', 'sts': 1 }
]

export default {
  list (cb) {
    setTimeout(() => cb(_TODOList), 100)
  },
  add (item, cb) {
    setTimeout(() => {
      _TODOList.push(item)
      cb()
    }, 100)
  },
  remove (item, cb) {
    setTimeout(() => {
      _TODOList.push(item)
      cb()
    }, 100)
  },
  save (_item, cb) {
    setTimeout(() => {
      _TODOList.find(item => item.id === _item.id)
      cb()
    }, 100)
  }
}
