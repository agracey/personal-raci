// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack')

module.exports = {
  entry: './ui/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      "react": "preact/compat",
      "react-dom": "preact/compat"
    }
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'index.js'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Volunteer Checkin',
  //     inject: true,
  //     template: 'src/index.html',
  //     filename: './index.html'
  //   }),
  //   new webpack.HotModuleReplacementPlugin(),
  //   new CopyWebpackPlugin([
  //     {from:'src/images',to:'images'} 
  //   ])
  // ]
}