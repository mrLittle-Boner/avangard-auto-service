import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import About from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/diagnostic',
    name: 'Diagnostic',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ADiagnostic.vue')
  },
  {
    path: '/wash',
    name: 'Wash',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AWash.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AService.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
