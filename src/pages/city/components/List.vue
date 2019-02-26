<template>
  <div class="list-city" ref="wrapper">
    <div>
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
            <li class="button" v-for="item of hot" :key="item.id">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="location" v-for="(item,key) of list" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="button-list">
          <ul>
            <li class="list border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'List',
  props: {
    hot: Array,
    list: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list-city
    overflow:hidden
    position:absolute
    left:0
    bottom:0
    right:0
    top:1.58rem
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
