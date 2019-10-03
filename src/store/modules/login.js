import { login as loginApi, logout } from '@/api/auth'
import {
  getLoginStatus,
  setLoginStatus,
  removeLoginStatus,

  getToken,
  setToken,
  removeToken

  // getExpireIn,
  // setExpireIn,
  // removeExpireIn,
} from '@/utils/auth'

const login = {
  state: {
    loginStatus: (getLoginStatus() === 'true'),
    token: getToken()
    // expireIn: getExpireIn(),
    // doRefresh: false
    // errorCount: null
    // accountLock: {
    //   isLock: false,
    //   accountName: '',
    //   mobilePhone: ''
    // },
    // expireTime: null,
    // sendTime: null
  },
  mutations: {
    SET_LOGIN_STATUS: (state, status) => {
      state.loginStatus = status
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
    // SET_REFRESH_TOKEN: (state, refreshToken) => {
    //   state.refreshToken = refreshToken
    // },
    // SET_EXPIRE_IN: (state, expireIn) => {
    //   state.expireIn = expireIn
    // },
    // SET_DO_REFRESH: (state, status) => {
    //   state.doRefresh = status
    // },
    // SET_ERROR_COUNT: (state, errorCount) => {
    //   state.errorCount = errorCount
    // },
    // SET_ACCOUNT_LOCK: (state, data) => {
    //   state.accountLock = data
    // },
    // SET_EXPIRE_TIME: (state, expireTime) => {
    //   state.expireTime = expireTime === 60 ? expireTime - 1 : expireTime
    //   state.sendTime = new Date()
    // }
  },
  actions: {
    async PostLogin({ commit }, auth) {
      try {
        const data = await loginApi(auth)
        commit('SET_LOGIN_STATUS', true)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        setLoginStatus(true)
        // setExpireIn(expireIn)
        return data
      } catch (error) {
        alert(error)
        throw error
      }
    },
    async PostLogOut({ commit, dispatch, state }) {
      try {
        const data = await logout({ token: state.token })
        commit('SET_LOGIN_STATUS', false)
        commit('SET_TOKEN', '')
        removeLoginStatus()
        removeToken()
        return data
      } catch (error) {
        alert(error)
        throw error
      }
    }
  }
}

export default login
