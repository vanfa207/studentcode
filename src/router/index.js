// src/router/index.js (or index.ts for TypeScript)
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import AvailableClasses from '../pages/AvailableClasses.vue'
import ClassVideo from '../pages/ClassVideo.vue'
import Contact from '../pages/Contact.vue'
import Login from '../pages/Login.vue'
import Support from '../pages/Support.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/video', name: 'video', component: ClassVideo },
  { path: '/available', name: 'available', component: AvailableClasses },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/login', name: 'login', component: Login },
  { path: '/support', name: 'support', component: Support },
  // Add your routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
