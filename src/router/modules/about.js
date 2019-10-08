export default {
  path: '/about',
  name: 'About',
  component: () => import(/* webpackChunkName: "about" */ '@/views/about'),
  meta: {
    i18n: 'about'
  }
}
