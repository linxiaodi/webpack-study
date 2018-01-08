import './index.css'
import 'underscore'
import 'js/common.js'
import fn from 'js/test.js'
const a = 2
console.log(a)
const p = function(){
  console.log('运行在p',a)
}
p()
const c = 1000
console.log(c)

fn()