import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Create from '@/components/Create'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/posts/:id',
      name: 'show',
      component: Show
    }
  ]
})
