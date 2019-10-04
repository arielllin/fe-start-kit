export default {
  path: '/404',
  name: '404',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "404" */ '../../views/situation/404.vue'),
  meta: {
    i18n: '404'
  }
}
