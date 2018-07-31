import Vue from 'vue'
import Router from 'vue-router'
import { Placeholder } from './utils'
import LoginPage from '@/pages/login'
import UserPage from '@/pages/user'
import projectPage from './project'
import modulePage from './module'
import itemPage from './item'
import casePage from './case'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'loginEmpty',
      component: LoginPage,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage,
      meta: {
        keepAlive: true
      }
    },
    projectPage,
    modulePage,
    itemPage,
    casePage
  ]
})
