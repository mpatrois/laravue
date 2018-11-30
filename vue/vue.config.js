module.exports = {
  indexPath: 'app.html',
  assetsDir: 'vue-dist',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:1994',
      },
    },
  },
};
