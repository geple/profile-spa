import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('views/AboutView')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('views/ProjectsView')
    },
  ]
})

export default router