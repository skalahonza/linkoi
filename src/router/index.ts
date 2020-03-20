import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/github',
    beforeEnter() { location.href = 'https://github.com/skalahonza/linkoi' }
  }
]

const router = new VueRouter({
  routes
})

export default router
