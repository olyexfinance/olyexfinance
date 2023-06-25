import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Index from "@/views/index.vue"
import AboutView from "@/views/AboutView"
import Privacy from "@/views/Privacy"
import Terms from "@/views/Terms"
import Temp from "@/views/Temp"

Vue.use(VueRouter)

const routes = [
  {
    path: '/aboutview',
    name: 'aboutview',
    component: AboutView
  },
  {
    path: '/temp',
    name: 'temp',
    component: Temp
  },
  {
    path: '/',
    name: 'index',
    component: Index,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: Terms
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
