<template>
  <div class="comment-wrapper">
    <h3 class="comment-title"><span class="comment-title-line"></span>用户评论</h3>
    <div class="comment-content border-top" v-if="comment" v-for="item of comment" :key="item.id">
      <div class="comment-date"><span>{{item.user}}  {{item.date}}</span></div>
      <p class="comment-text">{{item.content}}</p>
      <div class="comment-content-image" v-if="item.imgUrl" >
        <ul>
          <li class="list-img" v-for="(images, index) of item.imgUrl" :key="index">
            <img :src="images" >
          </li>
        </ul>
      </div>
    </div>
    <div class="end">in the end</div>
  </div>
</template>

<script>
export default {
  name: 'DetailComment',
  props: {
    comment: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .comment-wrapper
    overflow:hidden
    position: relative
    margin-top:.2rem
    margin-bottom: .2rem
    padding:0 .2rem
    background:#fff
    .comment-title
      position:relative
      width:100%
      height:.88rem
      line-height:.88rem
      font-size:.3rem
      color:$titleTextColor
      .comment-title-line
        display:inline-block
        width:.05rem
        height:.25rem
        border-radius:.5rem
        background:$bgColor
        margin-right:.15rem
    .comment-content
      display:inline-block
      padding:.2rem 0
      font-size:.26rem
      .comment-date
        line-height:.6rem
      .comment-text
        word-break:break-all
        word-wrap:break-word
        line-height:.42rem
        color:#616161
      .comment-content-image
        width:100%
        margin-top:.2rem
        text-align:center
        .list-img
          overflow:hidden
          float:left
          display:inline-block
          box-sizing:border-box
          width:31%
          height:1.64rem
          margin:0 .07rem .1rem .07rem
          img
            width:100%
            vercity-align:middle
    .end
      width:100%
      margin-bottom:.2rem
      text-align:center
      color: #eee
      font-size: .28rem
</style>
