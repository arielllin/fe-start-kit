import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

import help from './modules/help'
import login from './modules/login'
import about from './modules/about'
import page404 from './modules/404'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        i18n: 'home'
      }
    },
    page404,
    about,
    help,
    login
  ]
})
