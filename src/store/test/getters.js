export default {
  list (states) {
    return states.event
  },
  listFilter (states) {
    return states.event.filter(item => item.id > 1)
  },
  listSearch: (states) => (key) => {
    return states.event.filter(item => item.content.indexOf(key) >= 0)
  }
}
