<template>
  <div class="wrapper">
    <div class="wrapper-banner" @click="handleClickImgDetail">
      <img class="bannerImg" src="//img1.qunarzz.com/sight/p0/201403/10/1f873ebe7db4e41e31b2726c6a9e01a4.jpg_600x330_2d4f4fe7.jpg">
      <div class="title">花水湾第一村温泉</div>
      <div class="num"><span class="num-img iconfont">&#xe67b;</span>5</div>
    </div>
    <common-gallary v-show="detailImg" @changeClose="handleClickImgClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'detailBanner',
  data () {
    return {
      detailImg: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleClickImgDetail () {
      this.detailImg = true
    },
    handleClickImgClose () {
      this.detailImg = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    position: relative
    .wrapper-banner
      overflow:hidden
      width:100%
      height:0
      padding-bottom:55%
      position:relative
      .bannerImg
        width:100%
      .title
        position:absolute
        left:.2rem
        bottom:.36rem
        font-size:.36rem
        color:#fff
        text-shadow:0 1px 2px rgba(0,0,0,0.70)
      .num
        position:absolute
        width:1.2rem
        height:.4rem
        line-height:.4rem
        text-align:center
        left:.2rem
        bottom:.86rem
        font-size:.24rem
        color:#fff
        background:rgba(0,0,0,.5)
        border-radius:.2rem
        .num-img
          margin-right:.1rem
</style>
