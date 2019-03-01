<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="list"></div>
  </div>
</template>

<script>
import detailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'HomeRecommend',
  components: {
    detailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .list
    height:80rem
</style>
