<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: {
            el:'.swiper-pagination'
        },
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/93/ce59d182aca07102.jpg_640x200_ba03d44c.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/29/2a6b77b6ff72402.jpg_750x200_d4cec568.jpg'
      }]
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
