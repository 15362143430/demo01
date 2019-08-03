<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>{{item.add_time | dataFormat}}</span>
              <span>阅读量{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getnews();
  },
  methods: {
    getnews() {
      //http://www.liulongbin.top:3005/api/getnewslist
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(result => {
          console.log(result.body);
          if (result.body.status == 0) {
            this.newsList = result.body.message;
          } else {
            Toast("获取失败");
          }
        });
    }
  }
};
</script>

<style scoped>
.mui-table-view h1 {
  font-size: 14px;
}
.mui-table-view span {
  font-size: 12px;
  color: #226aff;
}
.mui-ellipsis {
  display: flex;
  justify-content: space-between; /*向两端对齐*/
}
</style>

