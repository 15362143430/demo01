<template>
  <div class="appBox">
    <!-- 这是头部啊啊啊 -->
   <mt-header fixed title="我是头部嘻嘻"></mt-header>

   <!-- 这是中间部分啊 -->
   <transition>
   <router-view></router-view>
   </transition>
    <!-- 这是底部啊啊啊 -->
   <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		
		
    
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
     
    };
  },
  methods: {
    
}
}
</script>

<style scoped>
.appBox{
  padding-top: 40px;
  padding-bottom: 50px;
   overflow-x: hidden; 
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;/*离开时开启绝对定位，会脱离文档不会挡到后面进来的组件*/
}
.v-enter-active,
.v-leave-active{
	transition: all 0.3s ease;
}
</style>

