// Setting object constructor, let plop know where to put your new file.
module.exports = {
  path: {
    // Common component
    components: 'src/components/',

    // Page component binding with router
    views: 'src/views/',

    // Frontend api controller
    api: 'src/api/',

    // Api form, to table-structured api arguments
    form: 'src/api/forms/',

    // Http request
    http: 'src/utils/http/',

    // Common function for specific situation
    utils: 'src/utils/',

    // Vue router
    router: 'src/router/',

    // Vuex, store.module
    modules: 'src/store/'
  }
}
