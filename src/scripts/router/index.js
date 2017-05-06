import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/index.vue'
import Login from '@/scripts/components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: 'index',
      children: [
        {
          path: 'index',
          component: Index
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
