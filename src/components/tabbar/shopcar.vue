<template>
  <div>
    <div class="mui-card" v-for="(item,index) in goodslist" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p>{{$store.getters.getSlected[item.id]}}</p>
          <mt-switch
            v-model="$store.getters.getSlected[item.id]"
            @change="changeSlected(item.id,$store.getters.getSlected[item.id])"
          ></mt-switch>
          <img :src="item.thumb_path" />
          <div>
            <h1 class="biaoti">{{item.title}}</h1>
            <div class="num">
              <p style="color:red">￥{{item.sell_price}}</p>
              <numbox
                :GoodsCount="$store.getters.getGoodsCount[item.id]"
                :goodsid="item.id"
                style="height:30px;margin:0 10px"
              ></numbox>
              <a href="#" @click.prevent="remove(index,item.id)">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div>
            <p>总计(不计邮费)</p>
            <p>
              已勾选商品
              <span style="color:red">{{$store.getters.getSelectedCount}}</span>件，总价：￥
              <span style="color:red">{{$store.getters.getAllGoodsPrice}}</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../shopcar/shopcar-numbox";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      var idArr = [];
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      if (idArr.length <= 0) {
        return; //如果idArr的长度为0则代表是空数组则不执行下面的代码了直接跳出
      }

      this.$http
        .get(
          "http://www.liulongbin.top:3005/api/goods/getshopcarlist/" +
            idArr.join(",")
        )
        .then(result => {
          if (result.body.status == 0) {
            this.goodslist = result.body.message;
          }
        });
    },
    remove(index, id) {
      //index用来删除本页面的，id用来删除vuex里的
      var flag = confirm("亲，确定要删除吗");
      if (flag) {
        this.goodslist.splice(index, 1);
        this.$store.commit("removeGoods", id);
      }
    },
    changeSlected(id,val){
        this.$store.commit("updateSelected",{id,selected:val})
    }
  },
  components: {
    numbox
  }
};
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;
}
.mui-card-content-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.num {
  display: flex;
}
.biaoti {
  font-size: 16px;
}
</style>
