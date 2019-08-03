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

## 组件切换动画的设置
1.设置进出的样式
2.解决右进左出，不挡到后边，这两个问题# demo01
