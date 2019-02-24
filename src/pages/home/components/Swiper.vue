<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="swiperChange">
            <!-- slides -->
            <swiper-slide v-for="item of swiper" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiper: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    swiperChange () {
      return this.swiper.length
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff
    .wrapper >>> .swiper-pagination
        bottom:.5rem
    .wrapper
        position:relative
        background:$textColor
        width:100%
        height:0
        padding-bottom:26.67%
        overflow:hidden
        .swiper-img
            width:100%
</style>
