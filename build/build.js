const config = require('./webpack.config')
const webpack = require('webpack')
webpack(config,function(err){
  if (err) throw err
  console.log('product......')
})