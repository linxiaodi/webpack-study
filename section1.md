## 目标
我们从最简单的想法开始，打包js文件，并且我们需要多出口多入口打包。

### 目录设计 
我们不会只有一个简简单单的`webpack.config.js`文件。我们想要高性能开发，就需要分别配置开发环境与生产环境。所以我们最开始的目录就是放在`build`文件夹下面。记得我之前学习如何打包的时候都是直接输入`webpack`打包。但是我们可以看vue脚手架的`script`是直接运行`node ./build/build.js`（我们暂且不讲`dev-server`），而它嘴根本的是运行这一段。
![](http://oph3rwqhn.bkt.clouddn.com/17-10-23/82545580.jpg)
所以我们要先`npm i webpack -D`
```
//build 目录 //存放webpack配置
  |-- build
        |-- webpack.config.js //webpack配置
        |-- build.js 
//package.json
  "script":{
    "build":"./build/build.js"
  }
//build.js
const config = require('./webpack.config')
```
### 如何配置多入口多出口文件
我们需要用到`glob`的依赖。[glob](https://npm.taobao.org/package/glob)
需要用到node的`path`模块。[path](http://nodejs.cn/api/path.html)    
我们还要像vue脚手架配置一些函数，在build目录下面创建`utils.js`   
```
  //utils.js
  const path = require('path')
  const glob = require('glob')
  const PAGE_PATH = path.resolve(__dirname,'../src/pages/')

  const entries = function(){
    let entryFiles = glob.sync(PAGE_PATH+'/*/*.js')
    console.log(entryFiles,PAGE_PATH)
  }
  entries()
```
![](http://oph3rwqhn.bkt.clouddn.com/17-10-23/37443892.jpg)
`node utils.js`可以看到entryFiles是一个数组。但是不符合webpack的entry格式。   
我们需要这样，如：
```
["/Users/XX/github/webpack-study/src/page/index/index.js"]
//变成
{
  index:"/Users/XX/github/webpack-study/src/page/index/index.js"
}
```
我们需要对数组进行一些操作
```
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
```

### 对打包进行整洁处理：引入[clean-webpack-plugin](https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder)
