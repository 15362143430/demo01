<template>
  <div class="newsinfoBox">
    <h1>{{newsInfo.title}}</h1>
    <p class="newsinfo-p">
      <span>时间:{{newsInfo.add_time | dataFormat}}</span>
      <span>点击量:{{newsInfo.click}}</span>
    </p>
    <p v-html="newsInfo.content"></p>
    <hr />
    <p>{{id}}</p>
    <br>
    <br>
    <br>
    <br>
    <h1>评论</h1>
    <hr>
    <comment-box></comment-box>
    

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import comment from "../subcomponents/comment";
export default {
  data() {
    return {
      id: this.$route.params.id, //获取从路由传过来的id
      newsInfo:[]
    };
  },
  created(){
       this.getNewsinfo();
  },
  methods: {
      getNewsinfo(){
          this.$http.get('http://www.liulongbin.top:3005/api/getimages/'+this.id).then(result=>{
              console.log(result.body)
              if(result.body.status===0){
                  this.newsInfo=result.body.message[0];
              }else{
                  Toast('新闻获取失败啦')
              }
          })
      }
  },
  components: {
      'comment-box':comment//评论子组件
  }
};
</script>

<style scoped>
.newsinfoBox {
  text-align: center;
}
h1 {
  font-size: 14px;
}
.newsinfo-p {
  color: blue;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
</style>


