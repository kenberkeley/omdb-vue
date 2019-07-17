const globby = require('globby')
const PurgecssPlugin = require('purgecss-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      // https://github.com/FullHuman/purgecss/tree/master/examples/with-vue
      new PurgecssPlugin({
        paths: globby.sync([
          './public/index.html',
          './src/**/*.vue',
          './src/**/*.js'
        ])
      })
    ]
  }
}
