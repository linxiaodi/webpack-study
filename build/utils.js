const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PAGE_PATH = path.resolve(__dirname,'../src/pages/')

const entries = function(){
  let entryFiles = glob.sync(PAGE_PATH+'/*/*.js')
  let map = {}
  entryFiles.forEach(filePath=>{
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1,filePath.lastIndexOf('.'))
    //多目录下有多个js文件进行过滤
    let arr = filePath.split('\/')
    if(arr[arr.length-2]===filename){
      map[filename] = filePath
    }
  })
  return map
}

const htmlPlugins=function(){
  let entryHtml = glob.sync(PAGE_PATH+'/*/*.html')
  let arr = []
  entryHtml.forEach(filePath=>{
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    let conf = {
      filename:filename+'.html',
      template:path.resolve(PAGE_PATH,filename+'/'+filename+'.html'),
      chunks:['common', filename],
      inject:true,
    }
    arr.push(new HtmlWebpackPlugin(conf))
  })
  return arr
}

module.exports={
  entries,
  htmlPlugins
}
