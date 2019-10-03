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
    PostLogin({ commit }, auth) {
      return new Promise((resolve, reject) => {
        loginApi(auth)
          .then((data) => {
            console.log('loginApi data', data)
            commit('SET_LOGIN_STATUS', true)
            commit('SET_TOKEN', data.token)
            setToken(data.token)
            setLoginStatus(true)
            // setExpireIn(expireIn)
            resolve()
          })
          .catch(error => {
          // if (error.code === '201-020002') {
          //   commit('SET_ERROR_COUNT', error.data.errorCount)
          // }
          // if (error.code === '201-020004') {
          //   commit('SET_ACCOUNT_LOCK', { isLock: true, accountName: loginForm.accountName })
          // }
            alert(error)
            reject(error)
          })
      })
    },
    PostLogOut({ commit, dispatch, state }) {
      return new Promise((resolve, reject) => {
        logout({ token: state.token })
          .then(() => {
            commit('SET_LOGIN_STATUS', false)
            commit('SET_TOKEN', '')
            removeLoginStatus()
            removeToken()
            // commit('SET_EXPIRE_IN', '')
            // removeExpireIn()
            // removeMarqueeUid()
            resolve()
          })
          .catch(error => {
            alert(error)
            reject()
          })
      })
    }
  }
}

export default login
