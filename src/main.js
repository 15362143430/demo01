/* eslint-disable */ /*禁止检查*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/mui/css/mui.min.css' //复制mui到lib(新建)里后再引入，这是mui样式表
import './lib/mui/css/icons-extra.css'//font里需添加依赖文件才行
//import './lib/mui/js/mui'//这是mui的js文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import app from './App'
import MintUI from 'mint-ui'//得先下载后再引入
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.config.productionTip = false

console.log('ok')

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  components: {

  },

})
