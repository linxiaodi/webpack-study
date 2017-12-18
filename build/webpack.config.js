const utils = require('./utils')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
module.exports={
  entry:utils.entries(),
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback:'style-loader',
          use:'css-loader'
        })
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
    new ExtractTextWebpackPlugin('css/[name].css')
  ]
}
