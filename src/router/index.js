import { createRouter, createWebHistory } from 'vue-router'
import lineChart from '../components/line-chart'

const routes = [
  {
    path: '/charts',
    name: 'Chart',
    component: lineChart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
