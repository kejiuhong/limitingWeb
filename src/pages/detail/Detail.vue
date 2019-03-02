<template>
  <div class="detail-wrapper">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-brief></detail-brief>
    <div class="list-content">
      <detail-list :list="list"></detail-list>
    </div>
    <detail-common></detail-common>
  </div>
</template>

<script>
import detailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailBrief from './components/Brief'
import DetailList from './components/List'
import DetailCommon from './components/Common'
export default {
  name: 'Detail',
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票 - 某一连锁店销售'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  },
  components: {
    detailBanner,
    DetailHeader,
    DetailBrief,
    DetailList,
    DetailCommon
  }
}
</script>

<style lang="stylus" scoped>
  .detail-wrapper
    background:#f1f0f0
</style>
