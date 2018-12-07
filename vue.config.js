module.exports = {
  indexPath: 'app.html',
  assetsDir: 'vue-dist',
  outputDir: 'vue/dist',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:1994',
      },
    },
  },
  chainWebpack: config => {
    config.entry('app').clear();
    config.entry('app').add('./vue/src/main.js').end();

    config
      .plugin('html')
      .tap(args => {
        args[0].template = './vue/public/index.html'
        return args;
      })

    config
      .plugin('copy')
      .tap(args => {
        args[0][0].from = './vue/public/'
        args[0][0].to = './'
        return args;
      })

      


  }

};
