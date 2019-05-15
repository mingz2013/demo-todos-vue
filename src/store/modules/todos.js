const todosModule = {
  // 保存所有全局变量
  state: {
    todos: [
      {
        id: '1',
        title: 'item1',
        content: '111111111111111'
      },
      {
        id: '2',
        title: 'item2',
        content: '111111111111111'
      },
      {
        id: '3',
        title: 'item3',
        content: '111111111111111'
      },
      {
        id: '4',
        title: 'item4',
        content: '111111111111111'
      }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      console.log('id', id)
      // return state.todos[0]
      return state.todos.find(todo => {
        console.log(todo)
        return todo.id === id
      })
    }
  },
  // 更改Vuex的store中的状态的唯一方法是提交mutation，mutation必须是同步函数. mutation非常类似于事件
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    removeTodo (state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    editTodo (state, todo) {
      state.todos.forEach((item, index) => { state.todos[index] = item.id === todo.id ? todo : state.todos[index] })
    }
  },
  // action 不直接修改state，而是提交mutation，action可包含异步操作
  actions: {
    addTodo (context, todo) {
      todo.id = '1'
      context.commit('addTodo', todo)
    },
    removeTodo (context, id) {
      context.commit('removeTodo', id)
    },
    editTodo (context, todo) {
      context.commit('editTodo', todo)
    }
  }

}
export default todosModule
