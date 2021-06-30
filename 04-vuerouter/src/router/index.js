import Vue from 'vue'
// 配置路由相关信息
import Router from 'vue-router'
import Home from "../components/Home";

// 通过Vue.use(插件)，安装插件
Vue.use(Router)

// 创建路由对象
export default new Router({
  routes: [
    {
      path:'/',
      name: Home,
      component: () =>import('../components/Home')
    }
  ]
})
