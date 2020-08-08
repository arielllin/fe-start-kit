import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './assets/icons/index'
import i18n from './lang' // Internationalization
import './permission' // permission control

Vue.config.productionTip = false

import InfiniteLoading from 'vue-infinite-loading'

Vue.use(InfiniteLoading, { /* options */ })

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
