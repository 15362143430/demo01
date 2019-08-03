<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img_url" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="#">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		         
		        </ul> 
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            lunbotuList:[]
        }
        
    },
     created(){
         this.getLunbotu();
     },
    methods: {
            getLunbotu(){//http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1
                this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(result=>{
                     console.log(result.body);
                    if(result.body.status==0){
                      this.lunbotuList=result.body.message
                    }else{
                      Toast('获取失败');
                    }
                })
            }
        }
};
</script>

<style scoped>
.mint-swipe {
  width: 100%;
  height: 200px;
}
.mint-swipe .mint-swipe-item:nth-child(1) {
  background: yellow;
}
.mint-swipe .mint-swipe-item:nth-child(2) {
  background: red;
}
.mint-swipe .mint-swipe-item:nth-child(3) {
  background: blue;
}
img{
  width: 100%;
  height: 100%;
}
.mui-grid-9{
  background: white;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:none;
}
</style>

