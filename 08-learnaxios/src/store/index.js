import Vue from 'vue'
import Vuex from 'vuex'

// 1、安装插件
Vue.use(Vuex)

// 2、创建对象
const store = new Vuex.Store({
  // 公共状态
  state: {
    message: 'xxx'
  },

  mutations: {
    saveToken(state, token) {
      Vue.set(state, 'token', token)
      Vue.set(state, 'requestToken', 'bearer' + token)
    }
  }
})

export default store

