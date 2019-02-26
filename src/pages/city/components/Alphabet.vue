<template>
  <ul class="alphabet">
    <li
      class="alpList"
      v-for="item of letter"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    list: Object
  },
  data () {
    return {
      status: false
    }
  },
  computed: {
    letter () {
      const letters = []
      for (let i in this.list) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.status = true
    },
    handleTouchMove (e) {
      if (this.status) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        // console.log(this.letter)
        if (index >= 0 && index <= this.letter.length) {
          this.$emit('change', this.letter[index])
        }
      }
    },
    handleTouchEnd () {
      this.status = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .alphabet
    position:absolute
    right:0
    bottom:0
    top:1.58rem
    width:.4rem
    color:$bgColor
    display:flex
    flex-direction:column
    justify-content:center
    .alpList
      line-height:.4rem
      text-align:center
</style>
