export default {
  path: '/infinite-scroll',
  name: 'infiniteScroll',
  component: () => import(/* webpackChunkName: "infinite-scroll" */ '@/views/infiniteScroll'),
  meta: {
    i18n: 'infiniteScroll'
  }
}

