##前言   
随着MVVM框架的流行，各个框架都有各自的脚手架，只需要知道几个npm简单的运行命令行，下载命令行等等。我们似乎不用太费力去学习`webpack`，但是当有些需求是脚手架无法满足的时候，我们往往惊慌失措，才回头恶补各种`webpack`知识。   
在最近，公司仅仅需要几个静态网页（为了方便做seo，所以不用其他MVVM框架，当然你也可以做SSR，由于本人所属公司太小，而且不注重技术模块，所以并没采用SSR），习惯了各种脚手架的快速开发，回到原始时期的刀耕火种的低效率，显然对于现代工程师来说不是很好的选择。   
本仓库是根据自己写的博客一步一步温习`webpack`模块化开发相关知识，并不会复述`webpack`指南的内容。而是从一个简单的需求开始构建，在构建中我们会借鉴到前辈们的脚手架，以及其他文章等。

```
//我们的目标类似于vue多模块开发目录
//比如我们有三个页面,index,list,about
//src目录
  |-- src //前端资源
      |-- assets // 公共的图片资源
      |-- modules //公共模块
            |-- js //公共的js
            |-- css //公共的css
            |-- font //公共的
      |—- pages
            |-- index
                  |-- index.html
                  |-- index.js
                  |-- index.css
                  |-- assets //私有图片管理
            |-- list
                  |-- list.html
                  |-- list.js
                  |-- list.css
                  |-- assets //私有图片管理
            |-- about
                  |-- about.html
                  |-- about.js
                  |-- about.css
                  |-- assets //私有图片管理
```   
```
//打包目录
//dist目录
  |-dist
      |-- index.html
      |-- list.html
      |-- about.html
      |-- static
            |-- js 所有js资源
            |-- css //所有css资源
            |-- font //所有font资源
            |-- img //所有图片资源
```

- section1 简单的webpack打包。
