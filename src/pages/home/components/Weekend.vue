<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-content" v-for="item of weekend" :key="item.id">
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
  props: {
    weekend: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .weekend-title
    width:100%
    height:0
    padding-bottom:.8rem
    line-height:.8rem
    padding-left:.2rem
    color:$titleTextColor
    background:#f9f6f6
    margin-top:.3rem
  .weekend-content
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
