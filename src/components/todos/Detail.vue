<template>
  <div>
    <h4>{{ item.title }}</h4>
    <div>
      <p>
        {{ item.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      item: {
      }
    }
  },
  props: ['id'],
  mounted () {
    console.log('mounted...')
    console.log(this.item)
    this.item = this.$store.getters.getTodoById(this.id) || {}
    console.log(this.item)
  }
}
</script>
