<template>
  <div>
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
    <div class="ball" v-show="flag" ref="ball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <img :src="goodsLunbotu[0].src" alt="">
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{goodsMsg[0].title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            <span>
              市场价
              <del>￥{{goodsMsg[0].market_price}}</del>
            </span>
            <span>
              销售价:
              <span style="color:red">￥{{goodsMsg[0].sell_price}}</span>
            </span>
          </p>
          <!-- 给numbox绑定一个事件 -->
          <p>购买数量:<numbox @getCount="getGoodsCount" :max="goodsMsg[0].stock_quantity"></numbox></p>
          
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger" @click="addtoShopCar">加入购物车</mt-button>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品详情</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号{{goodsMsg[0].goods_no}}</p>
          <p>库存情况{{goodsMsg[0].stock_quantity}}</p>
          <p>上架时间{{goodsMsg[0].add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="toxiangqing">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="tocomment">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "./goodsinfo-numbox.vue"//导入数字选择框组件
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      id: this.$route.params.id, // 获取上一个组件通过路由传过来的id
      goodsLunbotu: [],
      goodsMsg:[],
      flag:false,
      goodsCount:1//商品默认数量是1

    };
  },
  created() {
    this.getLunbotu();
    this.getGoodsMsg();
  },
  methods: {
    getLunbotu() {
      //'http://www.liulongbin.top:3005/api/getthumimages/' + this.id
      this.$http
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(result => {
          console.log(result.body);
          if (result.body.status == 0) {
            this.goodsLunbotu = result.body.message;
            console.log(this.goodsLunbotu);
          } else {
            Toast("获取失败");
          }
        });
    },
    getGoodsMsg() {
      //'http://www.liulongbin.top:3005/api/goods/getinfo/' + this.id
      this.$http
        .get("http://www.liulongbin.top:3005/api/goods/getinfo/" + this.id)
        .then(result => {
          console.log(result.body);
          if (result.body.status == 0) {
            this.goodsMsg = result.body.message;
            console.log(this.goodsMsg);
          } else {
            Toast("获取失败");
          }
        });
    },
    //点击使用编程式导航跳转到图文介绍页面
    toxiangqing(){
      var id=this.id;
      this.$router.push({name:"goodsxiangqing",params:{id}});
    },
    //点击使用编程式导航跳转到产品评论页面
    tocomment(){
      var id=this.id;
      this.$router.push({name:"goodscomment",params:{id}});
    },
    addtoShopCar(){
      this.flag=!this.flag;
      var goodsinfolist={
        id:this.id,//这件商品的id
        count:this.goodsCount,
        price:this.goodsMsg[0].sell_price,//商品的单价
        selected:true//商品是否选中
      };
      this.$store.commit("addToCar",goodsinfolist)//向vuex传值
    },
    beforeEnter(el){
      el.style.transform="translate(0,0)"
    },
    enter(el,done){
       const ballPosition=this.$refs.ball.getBoundingClientRect();
       //在vue里可以小范围操作DOM
       const huibiaoPosition=document.getElementById("huibiao").getBoundingClientRect();
      const x=huibiaoPosition.left-ballPosition.left;
      const y=huibiaoPosition.top-ballPosition.top;
      el.offsetWidth;
      el.style.transform=`translate(${x}px,${y}px)`;//使用沉音符
      el.style.transition="all 0.6s cubic-bezier(0.4,-0.3,1,0.68)";
      done()
    },
    afterEnter(){
      this.flag=!this.flag;
    },
    getGoodsCount(count){
      this.goodsCount=count;
      console.log(this.goodsCount)
    }
  },
  components:{
    numbox
  }
};
</script>

<style scoped>
.mui-card-content-inner {
  font-size: 16px;
  font-weight: bold;
}
.mui-card-footer{
  display: block;
}
.mui-card-footer button{
  margin: 15px 0;
}
.ball{
  position: absolute;
  z-index: 99;
  left: 140px;
  top: 510px;
  background: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
</style>


