### 关于babel的使用
> 首先`babel-preset-es2015`已经废弃，你可以使用`babel-preset-env`来代替它，后者比前者更好的更方便，这里不在赘述。[更详细的介绍](https://zhuanlan.zhihu.com/p/29506685)

### babel-polyfill VS babel-runtime VS babel-plugin-transform-runtime
- 首先`babel-polyfill`是对所有的API进行全局设置。并且会污染全局变量。
- `babel-runtime`需要对你需要的API，如：Object.assign()。会先require()
- `babel-plugin-transform-runtime`最推荐。它不需要require()也不会全局污染，并且，更厉害的是它是按需打包
