const merge = require('webpack-merge')
const path = require('path')
const envConfigVariable = process.env.ENV_CONFIG || 'production'
const envConfig = require(`./config/${envConfigVariable}.env`)

console.log('Start to build...')
console.log(`Information -  by config "${envConfigVariable}".`, envConfig)

const exportConfig = merge(require(`./build/webpack.${envConfig.BUILD_CONFIG}`), {
  /**
   * 链式操作 (高级)
   * 可参考
   * https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
   */
  chainWebpack: config => {
    // -- 设定html template / VERSION 参数 --
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0]['process.env'], envConfig)
      definitions[0]['process.env'].BUILD_CONFIG = `"${definitions[0]['process.env'].BUILD_CONFIG}"`
      return definitions
    })

    // -- 重新設定svg loader --
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(path.join(__dirname, '.', 'src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.module
      .rule('markdown')
      .test(/\.md?$/)
      .use('babel-loader')
      .loader('raw-loader')
      .end()

    // -- 指定不同挡案的 stylus loader 设定--
    // config.module.rule('stylus').oneOf('vue')
    //   .use('stylus-loader')
    //   .options({
    //     'import': [path.join(__dirname, '.', 'src/styles/var/index.styl')],
    //     'resolve url': true
    //   })
    // config.module.rule('stylus').oneOf('normal-modules')
    //   .use('stylus-loader')
    //   .options({
    //     'import': [path.join(__dirname, '.', 'src/styles/index.styl')],
    //     'resolve url': true
    //   })
    // config.module.rule('stylus').oneOf('normal')
    //   .use('stylus-loader')
    //   .options({
    //     'import': [path.join(__dirname, '.', 'src/styles/index.styl')],
    //     'resolve url': true
    //   })
    // config.module.rule('stylus').oneOf('vue-modules')
    //   .use('stylus-loader')
    //   .options({
    //     'import': [path.join(__dirname, '.', 'src/styles/index.styl')],
    //     'resolve url': true
    //   })
  }
  // -- svg-sprite-loader此规则在此会被原 file-loader 拦截走 --
  // module: {
  //   rules: [
  //     {
  //       test: /\.svg$/,
  //       loader: 'svg-sprite-loader',
  //       include: [path.join(__dirname, '..', 'src/assets/icons/svg')],
  //       options: {
  //         symbolId: 'icon-[name]'
  //       }
  //     }
  //   ]
  // }
  // },
})

module.exports = exportConfig
