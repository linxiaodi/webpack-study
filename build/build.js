const baseConfig = require('./webpack.config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const config = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback:'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common/[name].bundle.js',
      minChunks: utils.htmlPlugins().length
    }),
    new ExtractTextWebpackPlugin('css/[name].css')
  ]
})

webpack(config, function(err){
  if (err) throw err
  console.log('product......')
})