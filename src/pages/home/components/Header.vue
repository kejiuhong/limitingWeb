<template>
  <section class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-search">
        <span class="iconfont">&#xe6ac;</span>
        Enter the City/Scenic spot/Play the theme
      </div>
      <router-link to="/city">
        <div class="header-address">
          {{this.city}}<span class="arrow-address iconfont">&#xe623;</span>
        </div>
      </router-link>
  </section>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        width:100%
        height:1.27rem
        display:flex
        background:$bgColor
        height:0
        padding-bottom:.93rem
        line-height:.93rem
        color:#fff
        font-size:0.32rem
        position:relative
        .header-left
            width:0.78rem
            text-align:center
            .back-icon
                font-size:0.44rem
        .header-search
            flex:1
            width:100%
            height:0
            padding-bottom:.62rem
            line-height:.62rem
            padding-left:.04rem
            background:#fff
            border-radius:.1rem
            color:$textColor
            font-size:.24rem
            position:relative
            top:.15rem
        .header-address
            width:1.32rem
            text-align:center
            color:#fff
</style>
