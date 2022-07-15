import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login')
  }
  // {
  //   path: '/',
  //   component: () => import('@/views/layout')
  // },
  // {
  //   path: '/home',
  //   component: () => import('@/views/home')
  // },
  // {
  //   path: '/list',
  //   component: () => import('@/views/list')
  // },
  // {
  //   path: '/news',
  //   component: () => import('@/views/news')
  // },
  // {
  //   path: '/profile',
  //   component: () => import('@/views/profile')
  // }
]

const router = new VueRouter({
  routes
})

export default router
