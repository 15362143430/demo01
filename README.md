# vue-demo01

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 制作首页App组件
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
    在制作购物车小图标时，操作会相对多一些
    先把扩展图标的css文件拷贝到mui文件夹里的css文件夹里
    拷贝扩展字体库ttf文件到mui文件夹里的font文件夹里
    为购物车小图标，添加如下样式 mui-icon-extra mui-icon-extra-cart
3.要在中间区域放置一个router-view来展示路由匹配到的组件

## 改造tabbar为router-link
1.把a标签替换成router-link标签
2.把mui提供的高亮的类mui-active复制到router.js文件里替换路由默认的高亮类

## 设置点击tabbar中的路由连接展示对应的路由组件

## 制作首页轮播图布局
1.通过浏览器调试查看到每个轮播的图共用的类.mint-swipe-item，取出并修改图片

## 加载首页轮播图数据
1.获取数据，方法：vue-resource
2.使用vue-resource的this>$http.get获取数据
3.获取到的数据要保存到this.daita 的身上
4.使用v-for循环渲染每个item项

## 底部组件切换动画的设置
1.设置进出的样式
2.解决右进左出，不挡到后边，这两个问题

## 改造新闻资讯路由连接
1.先从mui中复制新闻列表模板
2.a标签换成router-link，href换成to

## 新闻资讯页面制作
1.绘制界面：使用mui里的media-list.html
2.使用vue-resource获取数据
3.渲染真实数据
4.格式化时间，先安装：npm i moment -S，再在main引入，定义格式，然后通过|调用格式

## 实现新闻资讯列表点击后跳转到新闻详情
1.把列表中的每一项改成router-link，同时，在跳转的时候应该提供唯一的id标识符
2.创建新闻详情的组件页面，newsinfo.vue
3.在router.js中将新闻详情的路由地址和组件页面对应起来

## 单独封装一个comment.vue评论子组件（因为有很多个页面里都有评论这个功能）
1.先创建一个单独的comment.vue
2.在需要comment的页面手动导入comment
3.在父组件中，使用components属性将刚才导进来的comment组件进行注册
4.将注册子组件时候的注册名称以标签形式在页面中引入即可

## 获取所有评论数据显示到首页中

## 实现点击加载更多评论的功能
1.为加载更多按钮，绑定点击事件，在实践中，请求 下一页数据
2.点击加载更多，让pageIndex++，然后重新调用this.getComment()方法重亲获取最新一页的数据
3.为了防止新数据覆盖老数据，我们在点击加载更多的时候，每当获取到新数据时，应该让老数据调用数组的concat方法，拼接上新数组

