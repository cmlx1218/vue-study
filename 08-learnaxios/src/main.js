import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
// import axios from "axios";
import {request, requestNotLogin} from "./network/request";


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

requestNotLogin({
  url: '/uaa/oauth/login',
  params: {
    username: 'manager5',
    code: 'hhz520'
  }
}).then(result => {
  console.log(result);
  // 获取到token之后存储到 Vuex中
  store.commit('saveToken',result.data.data.access_token)
  console.log(result.data.data.access_token);
}).catch(error => {
  console.log(error);
})


// **** 全局axios实例
// // 设置默认参数
// axios.defaults.baseURL = 'http://ifdev.aimymusic.com'
// axios.defaults.timeout = 15000
//
// // 基本使用
// axios({
//   url: '/uaa/oauth/login',
//   method: 'post',
//   params: {
//     'grant_type': 'cmspassword',
//     'username': 'manager5',
//     'code': 'hhz520'
//   },
//   headers: {
//     'Authorization': 'Basic Y21zOkFpbXlGaXRuZXNz'
//   }
// }).then(res => {
//   console.log(res);
// })
//
// // axios并发请求
// // axios.all([axios(), axios()])
// //   .then(results => {
// //     console.log(results)
// //   })
//
// // 分别获取两个请求的结果
// axios.all([axios(), axios()])
//   .then(axios.spread((result1, result2) => {
//     console.log(result1)
//     console.log(result2)
//   }))
