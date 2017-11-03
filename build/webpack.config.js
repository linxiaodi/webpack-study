const utils = require('./utils')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
  entry:utils.entries(),
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'../dist')
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
}