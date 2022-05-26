import { createStore } from 'vuex'

export default createStore({
  state: {
    num : 0
  },
  getters: {
  },
  mutations: {
    addNum(state){
      state.num++
    },
    devNum(state){
      state.num--
    }
  },
  actions: {
  },
  modules: {
  }
})
