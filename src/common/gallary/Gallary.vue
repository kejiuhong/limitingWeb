<template>
    <div class="imgDetail" @click="handleClickClose">
      <div class="imgDetail-wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
          <swiper-slide v-for="(item, index) of imgs" :key="index">
            <img class="detail-img" :src="item">
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
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClickClose () {
      this.$emit('changeClose')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .imgDetail >>> .swiper-container
    overflow: unset
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
      height:0
      padding-bottom:100%
      .detail-img
        width:100%
      .swiper-pagination
        color:#fff
        bottom:-1rem
</style>
