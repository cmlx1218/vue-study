import Vue from 'vue'
// 配置路由相关信息
import Router from 'vue-router'
import Home from "../components/Home";
import About from "../components/About";

// 通过Vue.use(插件)，安装插件
Vue.use(Router)

// 创建路由对象
export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path:'/home',
      name: Home,
      component: () =>import('../components/Home')
    },
    {
      path:'/about',
      name: About,
      component: () =>import('../components/About')
    }
  ],
  // 使用history路由跳转就不会出现 #
  mode: 'history'
})
