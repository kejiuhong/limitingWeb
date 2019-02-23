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
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点门票景点门票景点门票景点门票景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植园'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植园'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
        desc: '一日游'
      }, {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
        desc: '一日游'
      }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
