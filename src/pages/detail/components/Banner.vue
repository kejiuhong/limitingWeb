<template>
  <div class="wrapper">
    <div class="wrapper-banner" @click="handleClickImgDetail">
      <img class="bannerImg" :src="bannerImg">
      <div class="title">{{this.bannerTitle}}</div>
      <div class="num"><span class="num-img iconfont">&#xe67b;</span>{{num}}</div>
    </div>
    <transition-animate>
      <common-gallary v-show="detailImg" @changeClose="handleClickImgClose" :imgs="gallaryImgs"></common-gallary>
    </transition-animate>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import TransitionAnimate from 'common/gallary/TransitionAnimate'
export default {
  name: 'detailBanner',
  components: {
    CommonGallary,
    TransitionAnimate
  },
  props: {
    bannerTitle: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      detailImg: false
    }
  },
  computed: {
    num () {
      return this.gallaryImgs.length
    }
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
