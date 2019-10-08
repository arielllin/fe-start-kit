export default {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/login'),
  meta: {
    i18n: 'login'
  }
}

