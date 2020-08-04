import { createRouter, createWebHistory } from 'vue-router';
import DayPage from '../views/DayPage.vue'

const routes = [
  {
    path: '/',
    name: 'DayPage',
    component: DayPage
  },
  {
    path: '/month',
    name: 'MonthPage',
    component: () => import('../views/MonthPage.vue')
  },
  {
    path: '/year',
    name: 'YearPage',
    component: () => import('../views/YearPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
