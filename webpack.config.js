const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    'lefit-base': './node_modules/lefit-base/static/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'front'),
    publicPath: '/front/',
    filename: 'demo/[name][chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './node_modules/lefit-base/static/index.html',
      filename: './demo/lefit-base.html'
    })
  ]
}