const baseConfig = require('./webpack.config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  // https://segmentfault.com/a/1190000004280859 devtool: 'inline-source-map',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/',
    // 监听的端口
    port: 8080,
    // 使用热模块替换
    hot: true,
    // 自动打开页面
    open: true,
    // 显示打包进度
    progress: true,
    // 报错在页面打出
    overlay: {
      warnings: false,
      errors: true
    },
    // watchOptions: {   // 文件更改后延迟刷新,毫秒为单位进行轮询。   poll: 5000   //
    // aggregateTimeout: 1000 }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})

module.exports = config