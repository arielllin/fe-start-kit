import axios from 'axios'
// import store from '@/store/store'
// import { LoginAgainErrorCode } from '@/utils/constant'
// import CsntError from '@/utils/CsntError'
// import moment from 'moment'
// import i18n from '@/lang/index'
// import { $vm } from '@/main'
// import { getLoginStatus } from '@/utils/auth' // getToken from cookie

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 離過期時間３００(10秒緩衝時間差)秒內才會觸發refresh
    // 一定要return config 不然會跳錯 request 會被取消
    // config.headers['MX-Device-Type'] = '4'
    // config.headers['Accept-Language'] = i18n.locale
    // if (store.getters.expireIn && moment().isBetween(moment(store.getters.expireIn).subtract(300, 's'), moment(store.getters.expireIn)) && !store.getters.doRefresh) {
    //   return store.dispatch('RefreshToken').then(() => {
    //     return config
    //   }).catch(() => {
    //     return config
    //   })
    // } else {
    return config
    // }
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  // response => response,
  /*
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生须求加以修改，若不须要，则可删除
   */
  response => {
    // const res = response.data
    if (response.headers['content-type'] === 'image/jpeg') {
      const blobUrl = URL.createObjectURL(response.data)
      return blobUrl
    }
    // if (res.status !== 0) {
    //
    //   if (LoginAgainErrorCode.indexOf(res.code) > -1 && getLoginStatus() === 'true') {
    //     $vm.$popup.confirm.double({
    //       title: '你已被登出',
    //       content: '可以取消继续留在该页面，或者重新登录',
    //       confirmText: '重新登录',
    //       cancelText: '取消',
    //       onCancel: () => { console.log('cancel') },
    //       onConfirm: () => {
    //         store.dispatch('FedLogOut').then(() => {
    //           location.reload() // 为了重新实例化vue-router对象 避免bug
    //         })
    //       }
    //     })
    //   }
    //   return Promise.reject(new CsntError(res))
    // } else {
    return response.data
    // }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
