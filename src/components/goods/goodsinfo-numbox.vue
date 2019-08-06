<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
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
      console.log(this.$refs.numbox.value);
      this.$emit("getCount", parseInt(this.$refs.numbox.value));
    }
  },
  props: ["max"],
  watch: {
    max: function(newVal, oldVal) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
        console.log(max);
    }
  }
};
</script>
<style scoped>
</style>



