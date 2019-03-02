<template>
  <div>
    <div class="base-info">
      <div class="comment-brief border-bottom">
        <div class="comment">
          <p><span class="comment-num">4.9</span>分<span class="comment-in">很棒</span></p>
          <p class="introduce"><span>40046条评论</span>3条攻略</p>
          <div class="right-arrow iconfont">&#xe602;</div>
        </div>
        <div class="brief">
          <p>景点简介</p>
          <span class="introduce">开放时间、贴士</span>
          <div class="right-arrow iconfont">&#xe602;</div>
        </div>
      </div>
      <div class="current-address">
        <p><span class="address-icon iconfont">&#xe7e0;</span>四川省成都市都江堰市<span class="right-arrow iconfont">&#xe602;</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBrief'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .base-info
    overflow:hidden
    position:relative
    top:-.1rem
    padding:.1rem .2rem 0 .2rem
    border-radius:.1rem .1rem 0 0
    background:#fff
    .comment-brief
      box-sizing:border-box
      padding:.2rem 0
      display:flex
      height:1.1rem
      line-height:.35rem
      .comment
        position:relative
        flex:1
        color:#ff8300
        margin-right:.1rem
        border-right:1px solid #f0f0f0
        .comment-num
          font-size:.40rem
        .comment-in
          padding-left:.2rem
        .introduce
          span
            padding-right:.2rem
      .brief
        position:relative
        flex:1
        color:$titleTextColor
        padding-left:.2rem
      .introduce
        color:$textColor
        font-size:.26rem
        padding-right:.1rem
      .right-arrow
        position:absolute
        right:.5rem
        top:.1rem
        color:$textColor
    .current-address
      position:relative
      padding:.2rem 0
      line-height:.36rem
      color:$titleTextColor
      .address-icon
        margin-right:.2rem
        color:$textColor
        font-size:.36rem
      .right-arrow
        position:absolute
        right:.5rem
        top:.2rem
        color:$textColor
        font-size:.32rem
</style>
