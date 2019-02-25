<template>
  <div class="city-search">
    <input class="search" type="text" placeholder="enter your city name">
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .city-search
    background:$bgColor
    height:.72rem
    padding:0 .1rem
    .search
      box-sizing:border-box
      width:100%
      height:.62rem
      line-height:.62rem
      padding:0 .1rem
      text-align:center
      border-radius:.05rem
</style>
