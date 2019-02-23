<template>
  <div>
    <div class="recommend-title">猜你喜欢</div>
    <ul>
      <li class="recommend-content border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="re-content-img" :src="item.imgUrl">
        <div class="re-content-desc">
          <p class="re-content-desc-title">{{item.title}}</p>
          <p class="re-content-desc-text">{{item.desc}}</p>
          <button class="re-content-desc-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .recommend-title
    width:100%
    height:0
    padding-bottom:.6rem
    line-height:.6rem
    padding-left:.2rem
    color:$titleTextColor
  .recommend-content
    display:flex
    height:1.9rem
    overflow:hidden
    .re-content-img
      width:1.7rem
      height:1.7rem
      padding:.1rem
    .re-content-desc
      flex:1
      padding:.2rem
      .re-content-desc-title
        font-size:.28rem
        color:$titleTextColor
        ellipsis()
        margin-top:.2rem
      .re-content-desc-text
        font-size:.25rem
        color:$textColor
        ellipsis()
        margin-top:.2rem
      .re-content-desc-button
        margin-top:.2rem
        font-size:.26rem
        background:#ffb200
        padding:.05rem
</style>
