const todosModule = {
  // 保存所有全局变量
  state: {
    todos: [
      {
        id: 1,
        title: 'item1',
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
    }
  },
  // 更改Vuex的store中的状态的唯一方法是提交mutation，mutation必须是同步函数. mutation非常类似于事件
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    }
  },
  // action 不直接修改state，而是提交mutation，action可包含异步操作
  actions: {
    addTodo (context, todo) {
      context.commit('addTodo', todo)
    }
  }

}
export default todosModule
