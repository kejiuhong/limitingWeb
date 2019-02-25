<template>
  <div class="list-city">
    <div class="location">
      <div class="title border-topbottom">当前位置</div>
      <div class="button-list">
        <div class="button">成都</div>
      </div>
    </div>
    <div class="location">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <ul>
          <li class="button" v-for="item of hotcity" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="location" v-for="(item,key) of list" :key="key">
      <div class="title border-topbottom">{{key}}</div>
      <div class="button-list">
        <ul>
          <li class="list border-bottom" v-for="inneritem of item" :key="inneritem.name">{{inneritem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    hotcity: Array,
    list: Object
  }
}
</script>

<style lang="stylus" scoped>
  .list-city
    overflow:hidden
    position:absolute
    left:0
    bottom:0
    right:0
    top:1.59rem
    .title
      background:#eee
      width:100%
      line-height:.60rem
      color:#666
      font-size:.28rem
      text-indent:.1rem
    .button-list
      overflow:hidden
      padding:.1rem .6rem .1rem .1rem
      .button
        float:left
        border:.02rem solid #ccc
        width:28%
        padding:.1rem 0
        margin:.1rem
        border-radius:.1rem
        text-align:center
        font-size:.26rem
      .list
        width:100%
        font-size:.26rem
        padding:.2rem .6rem .1rem .1rem
</style>
