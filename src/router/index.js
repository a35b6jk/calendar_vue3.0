import { createRouter, createWebHistory } from 'vue-router';
import DayPage from '../views/DayPage.vue'

const routes = [
  {
    path: '/',
    name: 'day',
    component: DayPage
  },
  {
    path: '/month',
    name: 'month',
    component: () => import('../views/MonthPage.vue')
  },
  {
    path: '/year',
    name: 'year',
    component: () => import('../views/YearPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
