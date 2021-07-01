import Vue from 'vue'
// 配置路由相关信息
import Router from 'vue-router'

// 不使用这种方式，使用懒加载
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

// 通过Vue.use(插件)，安装插件
Vue.use(Router)

// 创建路由对象
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      meta: {
        title: '首页'
      },
      name: 'home',
      // 不适用import，使用如下进行懒加载
      component: () => import('../components/Home'),
      children: [
        {
          path: '',
          component: () => import("../components/HomeNews")
        },
        {
          path: 'news',
          component: () => import("../components/HomeNews")
        },
        {
          path: 'message',
          component: () => import("../components/HomeMessage")
        }
      ]
    },
    {
      path: '/about',
      meta: {
        title: '关于'
      },
      // name: About,
      component: () => import('../components/About')
    },
    {
      path: '/user/:userId',
      meta: {
        title: '用户'
      },
      // name: User,
      component: () => import('../components/User')
    },
    {
      path: '/profile',
      meta: {
        title: '档案'
      },
      // 独享前置守卫（配置使用和全局守卫一样）
      beforeEnter: (to, from, next) => {
        // console.log("档案页")
        next()
      },
      component: () => import('../components/Profile'),
    }
  ],
  // 使用history路由跳转就不会出现 #
  mode: 'history',
  // 通过路由属性修改全局active属性名
  linkActiveClass: 'active',
})

// 导航守卫
// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  // 从 from跳转到 to
  document.title = to.matched[0].meta.title
  // console.log("+++++")
  // 如果用户没有登录，跳转登录页面
  // if (){
  //   next('/login')
  //   停止跳转
  //   next(false)
  // }
  next()
})

// 后置钩子(hook)
router.afterEach((to, from) => {
  // console.log("-----")

})

export default router
