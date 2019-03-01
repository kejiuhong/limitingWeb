<template>
  <div class="detail-header" v-if="headerFading">
    <router-link tag="div" to="/" class="back-home iconfont">&#xe624;</router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      headerFading: false
    }
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
</style>
