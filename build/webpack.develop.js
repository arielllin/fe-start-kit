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
    open: true,
    hotOnly: true,
    proxy: 'http://localhost:3889'
    // proxy: {
    //   '/': {
    //     target: 'http://some.api-server.com',
    //     changeOrigin: true
    //   },
    //   '/another-api': {
    //     target: 'http://some.api-server.com',
    //     changeOrigin: true
    //   },
    // }
  }
}
