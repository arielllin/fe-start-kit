import Vue from 'vue'
import Vuex from 'vuex'

// getters
import getters from '@/store/getters'

import app from '@/store/modules/app'
import login from '@/store/modules/login'
import infiniteScroll from '@/store/modules/infiniteScroll'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    app,
    login,
    infiniteScroll
  },
  getters
})
