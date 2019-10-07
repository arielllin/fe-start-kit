export default {
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
  meta: {
    i18n: 'home'
  }
}
