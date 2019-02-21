<template>
  <section class="header">
    <div class="t-header">
      <div class="t-header-left">
          <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="t-header-address">
            旅游度假
            <span class="address">
                .成都站
                <span class="arrow-address iconfont">&#xe623;</span>
            </span>
       </div>
      <div class="t-header-right">
            <span class="iconfont shopping-icon">&#xe698;</span>
            <span class="iconfont shopping-icon">&#xe69b;</span>
      </div>
    </div>
    <div class="search-header">
        <div class="search">
            <span class="iconfont">&#xe6ac;</span>
            搜索目的地、主题、景色
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        width:100%
        height:1.27rem
        .t-header
            display:flex
            width:7.9rem
            height:.93rem
            line-height:.93rem
            padding:.1rem .2rem
            .t-header-left
                float:left
                width:.84rem
                .back-icon
                    font-size:.4rem
            .t-header-address
                flex:1
                text-align:center
                line-height.93rem
                font-size:.29rem
                color:$textColor
                font-weight:400
                .address
                    color:$titleTextColor
                    position:relative
                    .arrow-address
                        position:relative
                        top:.05rem
                        left:-.1rem
                        color:$textColor
                        font-size:.45rem
            .t-header-right
                float:right
                min-width:.98rem
                span
                    padding-right:.3rem
                .shopping-icon
                    font-size:.4rem
        .search-header
            text-align:center
            .search
                display:inline-block
                width:7.32rem
                height:.6rem
                border:.02rem solid #afadad
                border-radius:.4rem
                color:#afadad
                text-align:left
                line-height:.6rem
                padding-left:.2rem
                font-size:.21rem
</style>
