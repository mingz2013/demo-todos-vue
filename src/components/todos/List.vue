<template>
  <div>
    <CheckboxGroup v-for="item in items" :key="item.title">
      <Checkbox :label="item.title"></Checkbox>
      <Button @click="onBtnDetailClick( item.id )">detail</Button>
      <Button @click="onBtnEditClick( item.id )">edit</Button>
      <Button @click="onBtnRemoveClick( item.id )">remove</Button>
    </CheckboxGroup>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      // items: [],
      // checkedItems: []
    }
  },
  mounted () {
    // 加载
    this.getList()
  },
  computed: {
    items () {
      return this.$store.state.todos.todos
    }
  },
  // 方法集合
  methods: {
    onBtnDetailClick (id) {
      this.$router.push({path: `todos/detail/${id}`})
    },
    onBtnEditClick (id) {
      this.$router.push({path: `todos/edit/${id}`})
    },
    onBtnRemoveClick (id) {
      this.$store.dispatch('removeTodo', id).then(id => {
        this.$Message.success('success')
      }).catch(error => {
        this.$Message.error(error.detail || error)
      })
    },
    onCheckClick () {
    },
    getList () {
      this.$store.dispatch('getTodos').then(todos => {
        this.$Message.success('success')
      }).catch(error => {
        this.$Message.error(error.detail || error)
      })
    }
  }
}
</script>
