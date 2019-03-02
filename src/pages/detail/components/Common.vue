<template>
  <div class="common-wrapper">
    <h3 class="common-title"><span class="common-title-line"></span>用户评论</h3>
    <div class="common-content border-top">
      <div class="common-date"><span>马*7  2017-12-25</span></div>
      <p class="common-text">非常非常满意！上午熊猫基地，下午都江堰风景区，导游小蔡非常负责，上午看熊猫的时间非常好，导游带的路线也都可以近距离看到熊猫，出来的时候人特别多。旅行团的时间安排太好了，没有浪费在排队上！中午午餐也不应付有鱼有肉，下午都江堰每人一个无线耳机。可以很清楚的听到讲解。这一点非常赞！导游小蔡全程详细讲解，非常认真负责！</p>
      <div class="common-content-image">
        <ul>
          <li class="list-img"><img src="http://img1.qunarzz.com/piao/fusion/1712/94/9d400f3218cb6a02.jpg" ></li>
          <li class="list-img"><img src="http://img1.qunarzz.com/piao/fusion/1712/94/9d400f3218cb6a02.jpg" ></li>
          <li class="list-img"><img src="http://img1.qunarzz.com/piao/fusion/1712/94/9d400f3218cb6a02.jpg" ></li>
          <li class="list-img"><img src="http://img1.qunarzz.com/piao/fusion/1712/94/9d400f3218cb6a02.jpg" ></li>
          <li class="list-img"><img src="http://img1.qunarzz.com/piao/fusion/1712/94/9d400f3218cb6a02.jpg" ></li>
          <li class="list-img"><img src="http://img1.qunarzz.com/piao/fusion/1712/94/9d400f3218cb6a02.jpg" ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCommon'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .common-wrapper
    overflow:hidden
    margin-top:.2rem
    padding:0 .2rem
    background:#fff
    .common-title
      position:relative
      width:100%
      height:.88rem
      line-height:.88rem
      font-size:.3rem
      color:$titleTextColor
      .common-title-line
        display:inline-block
        width:.05rem
        height:.25rem
        border-radius:.5rem
        background:$bgColor
        margin-right:.15rem
    .common-content
      padding:.2rem 0
      font-size:.26rem
      .common-date
        line-height:.6rem
      .common-text
        word-break:break-all
        word-wrap:break-word
        line-height:.42rem
        color:#616161
      .common-content-image
        width:100%
        margin-top:.2rem
        .list-img
          overflow:hidden
          float:left
          display:inline-block
          box-sizing:border-box
          width:2.5rem
          height:1.82rem
          margin:0 .1rem .1rem .02rem
          img
            width:100%
</style>
