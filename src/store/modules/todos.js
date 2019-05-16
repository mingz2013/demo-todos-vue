import axios from '../../api'

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
    // getTodos: (state) => {
    // }
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
    },
    updateTodos (state, todos) {
      state.todos = todos
    }
  },
  // action 不直接修改state，而是提交mutation，action可包含异步操作
  actions: {
    addTodo (context, todo) {
      // context.commit('addTodo', todo)
      return new Promise((resolve, reject) => {
        axios.post('/todo/add', todo).then((response) => {
          console.log('add', response)
          if (response.data.success) {
            // let todos = response.data.todos || []
            todo = response.data.todo
            context.commit('addTodo', todo)
            resolve(todo)
          } else {
            reject(response.data.error)
          }
        }).catch(error => {
          console.log(error)
          reject(error)
        }).finally(() => {
          console.log('finally...')
        })
      })
    },
    removeTodo (context, id) {
      // context.commit('removeTodo', id)
      return new Promise((resolve, reject) => {
        axios.post('/todo/del', { 'id': id }).then((response) => {
          console.log('del', response)
          if (response.data.success) {
            // let todos = response.data.todos || []
            context.commit('removeTodo', id)
            resolve(id)
          } else {
            reject(response.data.error)
          }
        }).catch(error => {
          console.log(error)
          reject(error)
        }).finally(() => {
          console.log('finally...')
        })
      })
    },
    editTodo (context, todo) {
      return new Promise((resolve, reject) => {
        axios.post('/todo/edit', todo).then((response) => {
          console.log('edit', response)
          if (response.data.success) {
            // let todos = response.data.todos || []
            context.commit('editTodo', todo)
            resolve(todo)
          } else {
            reject(response.data.error)
          }
        }).catch(error => {
          console.log(error)
          reject(error)
        }).finally(() => {
          console.log('finally...')
        })
      })
    },
    getTodos (context) {
      return new Promise((resolve, reject) => {
        axios.post('/todo/list', {}).then((response) => {
          console.log('list', response)
          if (response.data.success) {
            let todos = response.data.todos || []
            context.commit('updateTodos', todos)
            resolve(todos)
          } else {
            reject(response.data.error)
          }
        }).catch(error => {
          console.log(error)
          reject(error)
        }).finally(() => {
          console.log('finally...')
        })
      })
    }
  }
}
export default todosModule
