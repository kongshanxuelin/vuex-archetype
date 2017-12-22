<template>
  <div class="hello">
    <h1>Home</h1>
    <div>
      <button @click="addOne">Add</button>
      <input type="text" v-model="q" style="width:90px;" />
      <button @click="search">Search</button>
    </div>
    <ul>
      <li :key="index" v-for="(a, index) in list"> {{a.content}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      q: '',
      list: []
    }
  },
  created () {
    if (this.q !== '') {
      this.list = this.$store.getters.listSearch(this.q)
    } else {
      this.list = this.$store.getters.list
    }
  },
  computed: {
  },
  methods: {
    addOne () {
      let _c = 'add it ' + new Date() + ' haha'
      this.$store.dispatch('add', {content: _c})
    },
    search () {
      this.list = this.$store.getters.listSearch(this.q)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
