<template>
  <div>
    title: <Input v-model="item.title"/>
    content: <Input v-model="item.content" type="textarea"/>
    <Button @click="onBtnClick">提交</Button>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      item: {}
    }
  },
  methods: {
    onBtnClick () {
      this.$store.dispatch('addTodo', Object.assign({}, this.item)).then(todo => {
        this.$Message.success('success')
      }).catch(error => {
        this.$Message.error(error.detail || error)
      })
    }
  }
}
</script>
