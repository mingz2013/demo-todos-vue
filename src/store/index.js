import Vuex from 'vuex'

import todosModule from './modules/todos'
import countModule from './modules/count'

const store = new Vuex.Store({
  modules: {
    todos: todosModule,
    count: countModule
  }
})

export default store
