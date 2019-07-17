const globby = require('globby')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const { name } = require('./package.json')

module.exports = {
  // https://cli.vuejs.org/guide/deployment.html#github-pages
  publicPath: process.env.NODE_ENV === 'production'
    ? `/${name}/`
    : '/',

  configureWebpack: {
    plugins: [
      // https://github.com/FullHuman/purgecss/tree/master/examples/with-vue
      new PurgecssPlugin({
        paths: globby.sync([
          './public/index.html',
          './src/**/*.vue',
          './src/**/*.js'
        ]),
        whitelistPatterns: [/nprogress/],
        whitelistPatternsChildren: [/nprogress/]
      })
    ]
  }
}
