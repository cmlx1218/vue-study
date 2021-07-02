import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Car = () => import('../views/car/Car')
const Profile = () => import('../views/profile/Profile')


// 1、安装插件
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})


export default router

