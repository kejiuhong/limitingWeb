<template>
  <div class="wrapper">
    <div class="alphabet">
      <ul>
        <li v-for="(item,key) of list">{{key}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    list: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import from '~styles/varibles.styl'
  .wrapper
    position:absolute
    right:0
    padding:.1rem
    color:$bgColor
</style>
