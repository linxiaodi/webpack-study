const utils = require('./utils')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports={
  entry:utils.entries(),
  output:{
    filename:'js/[name].js',
    path:path.resolve(__dirname,'../dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      'js': path.resolve(__dirname, '../src/modules/js')
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
  ].concat(utils.htmlPlugins())
}