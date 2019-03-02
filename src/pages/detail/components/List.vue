<template>
  <div>
    <div class="list-wrapper" v-for="(item, index) of list" :key="index">
      <div class="list-title border-bottom"><span class="title-icon"></span>{{item.title}}</div>
      <div class="list-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list-wrapper
    overflow:hidden
    background:#fff
    margin-top:.15rem
    .list-children
      .list-title
        width:100%
        height:.66rem
        font-size:.32rem
        padding:0 .3rem
        line-height: .66rem
        color:#5c5a5a
        .title-icon
          display:none
    .list-title
     width:100%
     height:.88rem
     line-height:.88rem
     padding:0 .2rem
     font-size:.34rem
     color:$titleTextColor
     .title-icon
      position: relative
      left: .06rem
      top: .06rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
</style>
