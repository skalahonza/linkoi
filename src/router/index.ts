import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstSummer from '../views/first/Summer.vue'
import SecondWinter from '../views/second/Winter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SecondWinter
  },
  {
    path: '/first/summer',
    name: 'First Summer',
    component: FirstSummer
  },
  {
    path: '/second/winter',
    name: 'Second Winter',
    component: SecondWinter
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
