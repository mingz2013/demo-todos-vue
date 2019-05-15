<template>
  <div>
    <h1><router-link :to="{path: '/todos'}">todos</router-link></h1>
    <Add></Add>
    <!--<TodoList></TodoList>-->
    <router-view/>
  </div>
</template>

<script>
import Add from './Add'
import TodoList from './List'

export default {
  name: 'Index',
  components: {TodoList, Add},
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      // value: ''
    }
  }

}
</script>
