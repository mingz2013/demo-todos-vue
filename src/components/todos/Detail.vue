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
      item: {}
    }
  },
  mounted () {
    this.item = {
      id: 1,
      title: 'item1',
      content: '222222222222222'
    }
  }
}
</script>
