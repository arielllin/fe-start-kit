import Vue from 'vue'
import Vuex from 'vuex'

// import signup from './modules/signup'
import app from './modules/app'

// getters
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  namespaced: true,
  modules: {
    // signup,
    app
  },
  getters
})
