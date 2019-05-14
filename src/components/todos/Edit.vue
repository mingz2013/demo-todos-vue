<template>
  <div>
    title: <Input v-model="item.title"/>
    content: <Input v-model="item.content" type="textarea"/>
    <Button>提交</Button>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      item: {}
    }
  }
}
</script>
