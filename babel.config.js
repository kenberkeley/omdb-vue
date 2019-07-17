module.exports = {
  presets: [
    ['@vue/app', { // https://github.com/vuejs/vue-cli/issues/3678
      // (Polyfill.io already covered, see <projectRoot>/public/index.html)
      useBuiltIns: 'entry'
    }]
  ]
}
