const countModule = {
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      // store.commit('increment')
      // store.commit('increment', 10)
      context.commit('increment')
    }
  },
  getters: {}
}

export default countModule
