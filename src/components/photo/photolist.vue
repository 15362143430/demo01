<template>
  <div>
    <!-- 顶部滑动区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="item in AllCategory"
            :key="item.id"
            @tap="getCatePhoto(item.id)"
            class="mui-control-item mui-active"
            data-wid="tab-top-subpage-1.html"
          >{{item.title}}</a>//tap只能在mui里用，比click效果好
        </div>
      </div>
    </div>

    <!-- 中部图片区域 -->
    <ul>
      <li v-for="item in PhotoList" :key="item.id">
        <img v-lazy="item.img_url" />
      </li>
    </ul>
  </div>
</template>


<script>
import mui from "../../lib/mui/js/mui"; //1.这是mui的js文件
import { get } from "http";

export default {
  data() {
    return {
      AllCategory: [],
      PhotoList: []
    };
  },
  created() {
    this.getAllCategory();
    this.getCatePhoto(0);
  },
  mounted() {//所有dom都被执行都才执行
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //2.flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(result => {
          if (result.body.status === 0) {
            console.log(result.body);
            result.body.message.unshift({ title: "全部", id: 0 });
            this.AllCategory = result.body.message;
          }
        });
    },
    getCatePhoto(cateId) {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimages/" + cateId) //千万别加冒号：
        .then(result => {
          if (result.body.status === 0) {
            console.log(result.body);
            this.PhotoList = result.body.message;
          } else {
            console.log(444444444444444);
          }
        });
    }
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  background: gray;
}
li img {
  width: 100%;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>


