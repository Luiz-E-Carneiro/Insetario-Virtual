import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsetarioView from '../views/InsetarioView.vue'
import DetalhesView from '../views/DetalhesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/insetario',
      name: 'insetario',
      component: InsetarioView,

    },
    {
      path: '/detalhes/:id',
      name: 'detalhes',
      component: DetalhesView,
      props: route => ({ id: Number(route.params.id) })
    },
    {
      path: '/:notFound',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
