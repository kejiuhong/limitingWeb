# limitingweb

> A Vue.js project
学习vuejs，模仿去哪儿网站

使用了 vue-awesome-swiper 框架
使用了 fastclick  解决手机端点击延迟的问题
使用了transition 设置详情页图片放大和缩小的动画效果

css预处理器使用的 stylus

思考：
在详情页面时遇到了header渐隐渐显效果真机测试不显示的问题

最后发现是兼容问题 ： document.documentElement.scrollTop 在手机上显示距离为0。最后将获取距离部分修改后便可以实现

手机端的页面要使用 overflow：hidden，可以在每个页面的组件上使用绝对定位让页面固定
 vue-router 让页面切换更简单
vuex是转为vuejs开发提供的状态管理模式，state内的数据发生改变，前端也会发生改变，mutation可以出发一个数据改变的事件
axios  类似于 ajax的作用，axios 使用了promise的语法，让代码更简单


以上有待优化，未完待续...




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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
