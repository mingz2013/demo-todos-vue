import Vue from 'vue'
import Vuex from 'vuex'
import todosModule from './modules/todos'
import countModule from './modules/count'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todos: todosModule,
    count: countModule
  }
})

export default store
