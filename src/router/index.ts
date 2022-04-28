import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detalle/:id&:tipo',
    name: 'detalle',
    
    component: () => import('../views/DetalleView.vue')
  },
  
  
  {
    path: '/carrito',
    name: 'carrito',
    
    component: () => import('../views/CarritoView.vue')
  },
  
  {
    path: '/filtroview/:tipo',
    name: 'filtroview',
    
    component: () => import('../views/FiltroView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
