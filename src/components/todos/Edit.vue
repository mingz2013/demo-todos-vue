<template>
  <div>
    title: <Input v-model="item.title"/>
    content: <Input v-model="item.content" type="textarea"/>
    <Button @click="onBtnClick">提交</Button>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      item: {
        title: '',
        content: ''
      }
    }
  },
  props: ['id'],
  mounted () {
    console.log('mounted')
    console.log(this.item)
    this.item = this.$store.getters.getTodoById(this.id) || {}
    console.log(this.item)
  },
  methods: {
    onBtnClick () {
      this.$store.dispatch('editTodo', this.item)
    }
  }
}
</script>
