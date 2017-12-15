const path = require('path')
const glob = require('glob')
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
entries()

module.exports={
  entries
}
