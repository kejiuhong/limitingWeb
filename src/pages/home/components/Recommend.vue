<template>
  <div>
    <div class="recommend-title">猜你喜欢</div>
    <ul>
      <router-link :to="'/detail/' + item.id" tag="li" class="recommend-content border-bottom" v-for="item of recommend" :key="item.id">
        <img class="re-content-img" :src="item.imgUrl">
        <div class="re-content-desc">
          <p class="re-content-desc-title">{{item.title}}</p>
          <p class="re-content-desc-text">{{item.desc}}</p>
          <button class="re-content-desc-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: Array
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
    margin-top: .1rem;
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
