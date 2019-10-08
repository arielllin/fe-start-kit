export default {
  path: '/help',
  name: 'Help',
  component: () => import(/* webpackChunkName: "help" */ '@/views/help'),
  meta: {
    i18n: 'help'
  }
}

