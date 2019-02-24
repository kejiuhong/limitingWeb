<template>
    <div class="icons-wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <img class="icon-img" :src="item.imgUrl" />
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons-wrapper >>> .swiper-container
        height:4.56rem;
    .icons-wrapper
        position:relative
        width:100%
        height:0
        padding-bottom:55%
        overflow:hidden
        .icon
            position:relative
            width:25%
            height:0
            padding-bottom:20%
            display:inline-block
            margin-top:.2rem
            text-align:center
            overflow:hidden
            .icon-img
                position:absolute
                left:0
                right:0
                bottom:.44rem
                height:1rem
                margin:0 auto
            .icon-desc
                position:absolute
                left:0
                right:0
                bottom:0
                width:1.4rem
                height: .44rem
                margin: 0 auto
                line-height: .44rem
                text-align: center
                color:$titleTextColor
                ellipsis()
                font-size:.26rem
</style>
