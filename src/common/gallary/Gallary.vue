<template>
    <div class="imgDetail">
      <div class="imgDetail-wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
          <swiper-slide v-for="item of imges" :key="item.id">
            <img class="detail-img" :src="item.imgUrl">
          </swiper-slide>
            <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      imges: [
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/10/f8495d302108ff902689880c553d4999.jpg_r_800x800_232f026a.jpg'}, {
          id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/10/46f7ef534be28a3ddc4678a1d89b83af.jpg_r_800x800_b27943ce.jpg'}, {
          id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/10/1f873ebe7db4e41e31b2726c6a9e01a4.jpg_r_800x800_4a36ea30.jpg'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .imgDetail
    z-index:99
    position:fixed
    left:0
    right:0
    top:0
    bottom:0
    background:#000
    display:flex
    flex-direction:column
    justify-content:center
    .imgDetail-wrapper
      width:100%
      .detail-img
        width:100%
      .swiper-pagination
        color:#fff
        bottom:-2rem
</style>
