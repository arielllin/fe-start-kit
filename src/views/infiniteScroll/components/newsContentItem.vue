<template>
  <div class="news-item" :class="`${tags}`">
    <div>
      <div class="title"><div>{{ item.objectID }}</div><div>{{ item.title }}</div></div>
      <div class="author">{{ item.author }} {{ item.created_at }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsContentItem',
  props: {
    tags: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.news-item
  padding 10px
  color white
  background-color #2c3e50
  border white 2px solid
  &.ask_hn
    color black
    background-color #edff88

  &.story
    background-color pink

  &.poll
    background-color sandybrown

  &.comment
    background-color slateblue

  .title
    display: flex
    align-items center
    text-align left
    div:nth-child(2)
      padding-left 10px
  .author
    text-align right
</style>
