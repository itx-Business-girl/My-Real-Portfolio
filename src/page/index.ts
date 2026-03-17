import { createWebHistory, createRouter } from 'vue-router'

import Home from './Home.vue'
import About from './About.vue'
import Project from './Project.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/Project', component: Project },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})