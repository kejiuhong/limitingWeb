<template>
  <div class="city-header">
    <router-link to='/'>
      <div class="iconfont back-home">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .city-header
    position:relative
    height:$headerH
    line-height:$headerH
    background:$bgColor
    color:#fff
    text-align:center
    font-size:.32rem
    overlfow:hidden
    .back-home
      position:absolute
      top:0
      left:0
      width:.64rem
      text-align:center
      color:#fff
      float:left
      font-size:.44rem
</style>
