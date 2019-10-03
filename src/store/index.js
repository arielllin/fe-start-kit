import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import login from './modules/login'

// getters
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  namespaced: true,
  modules: {
    app,
    login
  },
  getters
})
