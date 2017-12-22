<template>
  <div>
    <h1>Page2</h1>
    <ul>
      <li v-for="a in list"> {{a.content}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = this.$store.getters.list
  }
}
</script>


<style scoped>

</style>
