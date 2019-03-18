<template>
    <div class="home-wrapper">
        <home-header :city="city"></home-header>
        <home-swiper :swiper="swiperList"></home-swiper>
        <home-icon :icons="iconList"></home-icon>
        <home-recommend :recommend="recommendList"></home-recommend>
        <home-weekend :weekend="weekendList"></home-weekend>
    </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      updatePage: ''
    }
  },
  computed: {
    ...mapState({
      city: 'currentCity'
    })
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.recommendList = data.recommendList
        this.swiperList = data.swiperList
        this.weekendList = data.weekendList
        this.iconList = data.iconList
      }
    }
  },
  mounted () {
    this.updatePage = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.updatePage !== this.city) {
      this.updatePage = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.home-wrapper
  wrapper()
</style>
