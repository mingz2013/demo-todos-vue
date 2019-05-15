<template>
  <div>
    <CheckboxGroup v-for="item in items" :key="item.title" v-model="checkedItems">
      <Checkbox :label="item.title"></Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      items: [],
      checkedItems: []
    }
  },
  mounted () {
    // 加载
    this.getList()
  },
  // 方法集合
  methods: {
    getList () {
      this.items = [
        {
          id: '0',
          title: 'item1',
          content: '111111111'
        },
        {
          id: '1',
          title: 'item2',
          content: '111111111'
        },
        {
          id: '2',
          title: 'item3',
          content: '111111111'
        },
        {
          id: '3',
          title: 'item4',
          content: '111111111'
        }
      ]
    }
  }
}
</script>
