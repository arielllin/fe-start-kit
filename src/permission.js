import router from './router'
// import store from './store'
// import { getLoginStatus } from '@/utils/auth' // getToken from cookie
// import { whiteList } from '@/utils/constant'

// 白名單設定在此
router.beforeEach((to, from, next) => {
  next()
  // if (getLoginStatus() === 'true') {
  // if (!to.matched.length) {
  //   next({ path: '/404' })
  // } else if (to.path === '/login') {
  //   next({ path: '/' })
  // } else {
  // next()
  // }
  // } else {
  /* has no token*/
  // store.dispatch('PostLogOut')
  //   .then(() => {
  //     if (whiteList.indexOf(to.path) !== -1) {
  //       next()
  //     } else {
  //       next(`/entry/login?redirect=${to.fullPath.replace(/&/g, '%26')}`) // 否则全部重定向到登录页
  //     }
  //   })
  // next()
  // }
})

router.afterEach((to, from) => {
  // Do something with router hook
})
