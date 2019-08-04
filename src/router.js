/* eslint-disable */ /*禁止检查*/
import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/photolist.vue'
import goodslist from './components/goods/goodslist.vue'

var router=new VueRouter({
  routes:[
    { path: '/', component: home },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component: search },
    { path: '/home/newslist', component: newslist },
    { path: '/home/newsinfo/:id', component: newsinfo },
    { path: '/home/photolist', component: photolist },
    { path: '/home/goodslist', component: goodslist }
  ],
  linkActiveClass:"mui-active"//覆盖默认高亮的类
})

export default router
