import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import page404 from './modules/404'
import about from './modules/about'
import help from './modules/help'
import home from './modules/home'
import login from './modules/login'
import infiniteScroll from './modules/infiniteScroll'

export default new Router({
  routes: [page404, about, help, home, login, infiniteScroll]
})
