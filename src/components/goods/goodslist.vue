<template>
  <div class="goods-box">
    <div class="goods-phone" v-for="item in Goods" :key="item.id">
      <img :src="item.img_url" alt />
      <h4 class="goods-name">{{item.title}}</h4>
      <div class="goods-p">
        <p class="goods-msg">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="goods-shengyu">
          <span>热卖中</span>
          <span>库存：{{item.stock_quantity}}</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMoreGoods">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Goods: [],
      pageindex:1
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    getGoods() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getgoods?pageindex="+this.pageindex)
        .then(result => {
          console.log(result.body);
          if (result.body.status == 0) {
            this.Goods = result.body.message;
          } else {
            Toast("获取失败");
          }
        });
    },
    getMoreGoods(){//点击加载更多把新的数组拼接到旧数组上，而不是覆盖
        this.pageindex++;
        this.$http
        .get("http://www.liulongbin.top:3005/api/getgoods?pageindex="+this.pageindex)
        .then(result => {
          console.log(result.body);
          if (result.body.status == 0) {
            this.Goods = this.Goods.concat(result.body.message);
          } else {
            Toast("获取失败");
          }
        });
    }
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.goods-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1%;
}
.goods-box .goods-phone {
  margin: 5px 0;
  width: 49%;
  border: 0.5px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.goods-box .goods-phone p {
  background: #ddd;
  padding: 10px 0;
}
.goods-box .goods-phone .goods-msg .now {
  color: red;
  font-size: 16px;
  font-weight: bolder;
}
.goods-box .goods-phone .goods-msg .old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}

.goods-box .goods-phone .goods-shengyu {
  display: flex;
  justify-content: space-between;
}
.goods-box .goods-phone img {
  width: 100%;
}
</style>


