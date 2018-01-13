const utils = require('./utils')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

const resolve = (t) => {
  return path.resolve(__dirname, t)
}

module.exports={
  entry:Object.assign(utils.entries(), {
    common: 'underscore'
  }),
  output:{
    filename:'js/[name].js',
    path:path.resolve(__dirname,'../dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@':'../src/',
      'js': resolve('../src/modules/js'),
      'css': resolve('../src/modules/css')
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include:[resolve('../src')]
      },
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/[name].bundle.js',
      minChunks: utils.htmlPlugins().length
    }),
  ].concat(utils.htmlPlugins())
}