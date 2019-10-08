export default {
  path: '/404',
  name: '404',
  component: () => import(/* webpackChunkName: "404" */ '@/views/situations/404'),
  meta: {
    i18n: '404'
  }
}

