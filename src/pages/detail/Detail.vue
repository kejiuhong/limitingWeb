<template>
  <div class="detail-wrapper">
    <detail-banner :bannerTitle="bannerName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-brief></detail-brief>
    <div class="list-content">
      <detail-list :list="List"></detail-list>
    </div>
    <detail-common></detail-common>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailBrief from './components/Brief'
import DetailList from './components/List'
import DetailCommon from './components/Common'
export default {
  name: 'Detail',
  data () {
    return {
      bannerName: '',
      bannerImg: '',
      gallaryImgs: [],
      List: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailBrief,
    DetailList,
    DetailCommon
  },
  methods: {
    detailGetIfo () {
      axios.get('api/detail.json')
        .then(this.detailGetIfoSucess)
    },
    detailGetIfoSucess (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.List = data.categoryList
      }
    }
  },
  mounted () {
    this.detailGetIfo()
  }
}
</script>

<style lang="stylus" scoped>
  .detail-wrapper
    background:#f1f0f0
</style>
