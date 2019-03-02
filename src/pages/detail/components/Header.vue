<template>
  <div>
    <router-link tag="div" to="/" class="back-home-banner iconfont" v-if="backhomeFading">&#xe624;</router-link>
    <div class="detail-header" v-if="headerFading" :style="opacityStyle">
      <router-link tag="div" to="/" class="back-home iconfont">&#xe624;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      headerFading: false,
      backhomeFading: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleClickFading () {
      const offTop = document.documentElement.scrollTop
      // console.log(offTop)
      if (offTop > 60) {
        let opacity = offTop / 250
        this.opacityStyle.opacity = opacity
        this.backhomeFading = false
        this.headerFading = true
      } else {
        this.headerFading = false
        this.backhomeFading = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleClickFading)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .detail-header
    z-index:3
    position:fixed
    top:0
    left:0
    right:0
    bottom:0
    height: $headerH
    background: $bgColor
    .back-home
      position:absolute
      top:.1rem
      left:.2rem
      width:.72rem
      height:.72rem
      line-height:.72rem
      text-align:center
      font-size:0.44rem
      color:#fff
  .back-home-banner
      z-index:2
      position:fixed
      top:.1rem
      left:.2rem
      width:.72rem
      height:.72rem
      line-height:.72rem
      border-radius:50%
      background:rgba(0,0,0,.5rem)
      text-align:center
      font-size:0.44rem
      color:#fff
</style>
