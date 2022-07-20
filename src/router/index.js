import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/home',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home')
      },
      {
        path: 'list',
        component: () => import('@/views/List')
      },
      {
        path: 'news',
        component: () => import('@/views/News')
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile')
      }
    ]
  },
  {
    path: '/favorite',
    component: () => import('@/views/Favorite')
  },
  {
    path: '/rent',
    component: () => import('@/views/Rent')
  }
]

const router = new VueRouter({
  routes
})

export default router
