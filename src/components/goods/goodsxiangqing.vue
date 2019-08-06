<template>
    <div>
        <h2>{{xiangqing[0].title}}</h2>
        <br>
        <hr>
        <h3 v-html="xiangqing[0].content"></h3>
    </div>
</template>

<script>
export default {
    data () {
        return {
           id: this.$route.params.id ,
           xiangqing:[]
        }
    },
    created(){
        this.getxiangqing()
    },
   methods: {
       getxiangqing() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/goods/getdesc/" + this.id)
        .then(result => {
          console.log(result.body);
          if (result.body.status == 0) {
            this.xiangqing = result.body.message;
          } else {
            Toast("获取失败");
          }
        });
    }
   }

}
</script>


<style>
h2{
    width: 100%;
    font-size: 16px;
    
}
h3 img{
    width: 100%;
    padding: 0 5px;
}

</style>

