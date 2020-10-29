import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/planta',
    name: 'planta',
    component: () => import(/* webpackChunkName: "about" */ '../views/Planta.vue')
  },
  {
    path: '/locales',
    name: 'locales',
    component: () => import(/* webpackChunkName: "about" */ '../views/Locales.vue')
  },
  {
    path: '/franquicias',
    name: 'franquicias',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Franquicias.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
}
})

export default router
