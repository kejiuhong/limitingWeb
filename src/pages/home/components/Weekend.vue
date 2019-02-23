<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="recommend-content border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="re-content-img" :src="item.imgUrl">
        <div class="re-content-desc">
          <p class="re-content-desc-title">{{item.title}}</p>
          <p class="re-content-desc-text">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
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
    padding-bottom:.8rem
    line-height:.8rem
    padding-left:.2rem
    color:$titleTextColor
    background:#f9f6f6
    margin-top:.3rem
  .recommend-content
    overflow:hidden
    margin-bottom:.1rem
    .re-content-img
      width:100%
      height:2.3rem
    .re-content-desc
      padding:.2rem
      .re-content-desc-title
        font-size:.28rem
        color:$titleTextColor
        ellipsis()
      .re-content-desc-text
        font-size:.25rem
        color:$textColor
        ellipsis()
        margin-top:.2rem
</style>
