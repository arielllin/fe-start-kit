/**
 * 開發用 webpack.dev.server 設定
 */
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    host: '0.0.0.0',
    port: 9797,
    https: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    open: true,
    hotOnly: true,
    proxy: {
      '/mock': {
        target: 'http://localhost:3889',
        changeOrigin: true
      },
      '/scroll/*': {
        target: 'http://hn.algolia.com',
        changeOrigin: true,
        pathRewrite: { '^/scroll': '' },
        secure: false
      }
    }
  }
}
