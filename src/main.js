/* eslint-disable */ /*禁止检查*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/mui/css/mui.min.css' //复制mui到lib(新建)里后再引入，这是mui样式表
import './lib/mui/css/icons-extra.css'//font里需添加依赖文件才行
import Vue from 'vue'
Vue.config.devtools = true//让devtools能实现
import Vuex from 'vuex'//安装后(npm i vuex -S)导入vuex包
Vue.use(Vuex)
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
import moment from 'moment'//导入格式化时间的插件
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})



console.log('ok')

/* eslint-disable no-new */
//每次进来先把内存中的数据复制给这个数组，然后把这个数组赋值给car，确保刷新后还是那样而不是归零
var lscar=JSON.parse(localStorage.getItem('car')||"[]")

var store=new Vuex.Store({
  state: {//this.$store.state.xxx
    car:lscar//用来存放每一个商品对象
  },
  mutations:{//this.$store.commit('方法的名称'，'按需传递唯一的参数')
    addToCar(state,goodsinfolist){
      var flag=false;
      state.car.some(item=>{
        if (item.id==goodsinfolist.id) {
          item.count=item.count+parseInt(goodsinfolist.count);
          flag=true;
          console.log(state.car)
          return true;
        }
      })
      if (flag==false) {
        state.car.push(goodsinfolist)
        console.log(state.car)
      }
      localStorage.setItem('car',JSON.stringify(state.car))//把car存在内存里防止刷新就没了
    },
    updateCount(state,updatelist){
      state.car.some(item=>{
        if(item.id==updatelist.id){
          item.count=parseInt(updatelist.count);
          return true;
        }

        localStorage.setItem('car',JSON.stringify(state.car))//把car存在内存里防止刷新就没了
      })
    },
    removeGoods(state,id){
      state.car.some((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1);
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))//把car存在内存里防止刷新就没了
    },
    updateSelected(state,selectedlist){//更新滑动按钮的状态
      state.car.some(item=>{
        if(item.id==selectedlist.id){
          item.selected=selectedlist.selected;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))//把car存在内存里防止刷新就没了
    }
  },
  getters:{//this.$store.getters.xxxx
    //相当于计算属性也相当于filters
    getAllCount(state){
      var c=0;
      state.car.forEach(item=>{
        c=c+item.count;
      })
      return c;
    },
    getGoodsCount(state){
      var o={};
      state.car.forEach(item=>{
        o[item.id]=item.count//这里的[]不是索引，是属性的属性名
      })
      return o;
    },
    getSlected(state){//获取滑动按钮状态
      var s={};
      state.car.forEach(item=>{
        s[item.id]=item.selected
      })
      return s;
    },
    getSelectedCount(state){//获取滑动按钮为true的商品的数量
      var c =0;
      state.car.some(item=>{
        if(item.selected==true){
          c++
        }
      })
      return c;
    },
    getAllGoodsPrice(state){//计算购买的总价格
      var c=0;
      state.car.some(item=>{
        if(item.selected==true){
          c=c+item.count*item.price
        }
      })
      return c;
    }
  }
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store,//挂载vuex
  components: {

  },

})

