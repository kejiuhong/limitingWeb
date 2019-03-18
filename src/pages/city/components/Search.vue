<template>
  <div>
    <div class="city-search">
      <input class="search" type="text" placeholder="enter your city name" v-model="inputValue">
    </div>
    <div class="keyworld" v-show="inputValue" ref="keyworldList">
      <ul>
        <li class="keyworldList border-bottom" v-for="item of searchList" :key="item.id" @click="handleClickSearch(item.name)">{{item.name}}</li>
        <li class="keyworldList border-bottom" v-show="hasNoData">Do not found matching data</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'Search',
  props: {
    list: Object
  },
  data () {
    return {
      inputValue: '',
      searchList: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.searchList.length
    }
  },
  methods: {
    handleClickSearch (e) {
      this.changeCity(e)
      this.$router.push('/')
      this.inputValue = ''
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    inputValue () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.inputValue) {
        this.searchList = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.list) {
          // console.log(i)
          this.list[i].forEach((v) => {
            if (v.spell.indexOf(this.inputValue) > -1 || v.name.indexOf(this.inputValue) > -1) {
              result.push(v)
            }
          })
        }
        // console.log(result)
        this.searchList = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.keyworldList, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .city-search
    background:$bgColor
    height:.72rem
    padding:0 .1rem
    .search
      box-sizing:border-box
      width:100%
      height:.62rem
      padding:.12rem .1rem
      text-align:center
      font-size: .28rem
      border-radius:.05rem
  .keyworld
    z-index:1
    overflow:hidden
    background:#eee
    position:absolute
    left:0
    right:0
    bottom:0
    top:1.58rem
    .keyworldList
      line-height:.62rem
      padding-left:.2rem
      background:#fff
      color:#666
</style>
