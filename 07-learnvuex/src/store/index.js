import Vue from 'vue'
import Vuex from 'vuex'

import {INCREMENT} from "./mutations-types";


// 1、安装插件
Vue.use(Vuex)

// 2、创建对象

const moduleA = {
  state: {
    name: 'aaaa'
  },
  mutations: {
    updateName(state) {
      state.name = state.name + 'bbbb'
    }
  },
  getters: {
    fullName1(state) {
      return state.name + 'ccc'
    },
    fullName2(state, getters) {
      return getters.fullName1 + 'ddd'
    },
    // rootState 可以拿到根state的值
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter + 'eee'
    }
  },
  actions: {
    aUpdateName(context, payload) {
      setTimeout(() => {
        console.log(payload)
        context.commit('updateName')
      },1000)

    }
  },
}

const moduleB = {
  state: {},
  mutations: {},
  actions: {},
  getters: {},
}


const store = new Vuex.Store({
  // 公共状态
  state: {
    counter: 1000,
    student: [
      {id: 1, name: 'cmlx', age: 22},
      {id: 2, name: 'hhxs', age: 56},
      {id: 3, name: 'ywwz', age: 24},
      {id: 4, name: 'cqsz', age: 23},
    ],
    info: {
      id: 88,
      name: '无极老祖',
      age: 88
    }
  },

  // Vuex中store状态的唯一更新方式
  // 字符串的 事件类型 和 回调函数
  mutations: {
    // 方法
    // increment(state, count) {
    //   state.counter += count
    // },
    // 使用常量类型
    [INCREMENT](state, payload) {
      state.counter += payload.count
    },
    decrement(state) {
      state.counter--
    },
    addStudent(state, stu) {
      state.student.push(stu)
    },
    updateInfo(state) {
      // state里面的状态在加载时就会加入到响应式系统中，修改这些属性的值得时候页面可以实时刷新
      state.info.name = 'zq'

      // 错误代码，不要再Mutation里面进行异步操作，用Action替代
      // setTimeout(() => {
      //   state.info.name = 'zq'
      // }, 1000)

      // address是新加的属性页面不会直接渲染
      // state.info['address'] = '开江'
      // 使用Vue.set将属性添加到响应式系统中
      Vue.set(state.info, 'hobby', '打球')
      // address是新加的属性页面不会直接渲染
      // delete state.info.age
      // 使用Vue.delete将属性添加到响应式系统中
      Vue.delete(state.info, 'age')
    }
  },

  // 异步
  actions: {
    aUpdateInfo(context, playload) {
      // setTimeout(() => {
      //   // console.log(playload)
      //   context.commit('updateInfo')
      //   console.log(playload.message)
      //   playload.success()
      // }, 1000)

      // 用Promise优雅的实现
      return new Promise(((resolve, reject) => {
        setTimeout(() => {
          console.log(playload);
          context.commit('updateInfo')
          resolve('22222')
        }, 2000)
      }))
    }
  },

  // 数据处理
  getters: {
    // 普通计算
    powerCounter(state) {
      return state.counter * state.counter
    },
    StuAgeMore(state) {
      return state.student.filter(s => s.age > 30)
    },
    // 引用其他getters
    StuAgeMoreLength(state, getters) {
      // return state.student.filter(s => s.age > 30).length
      return getters.StuAgeMore.length
    },
    // 接收参数进行计算
    // StuAgeMoreInput(state) {
    //   return function (age) {
    //     return state.student.filter(s => s.age > age)
    //   }
    // }
    StuAgeMoreInput(state) {
      return age => state.student.filter(s => s.age > age)
    }
  },

  // 将store分割成模块，每个模块都拥有自己的state、mutation、action、getters等
  modules: {
    ma: moduleA,
    mb: moduleB
  }
})

// 3、导出store对象
export default store
