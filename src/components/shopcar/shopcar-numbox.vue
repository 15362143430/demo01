<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="GoodsCount"
      @change="countChange"
      ref="numbox"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui"; //1.这是mui的js文件
export default {
  mounted() {
    //初始化数字选择框
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChange() {
     this.$store.commit("updateCount",{
         id:this.goodsid,
         count:this.$refs.numbox.value
     })
    }
  },
  props:["GoodsCount","goodsid"]
};
</script>
<style scoped>
</style>