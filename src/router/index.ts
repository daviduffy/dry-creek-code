import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/week-one',
      name: 'week-one',
      content: 'week1.yaml',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeekView.vue'),
    },
    {
      path: '/week-two',
      name: 'week-two',
      content: 'week2.yaml',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeekView.vue'),
    },
    {
      path: '/week-three',
      name: 'week-three',
      content: 'week3.yaml',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeekView.vue'),
    },
    {
      path: '/week-four',
      name: 'week-four',
      content: 'week4.yaml',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeekView.vue'),
    },
    {
      path: '/week-five',
      name: 'week-five',
      content: 'week5.yaml',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeekView.vue'),
    },
  ],
})

export default router
