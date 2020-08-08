<template>
  <div class="news-container">
    <div v-for="(item, $index) in list" :key="$index" class="news-item" :class="`${tags}`">
      <!-- Hacker News item loop -->
      <div>
        <div class="title"><div>{{ item.objectID }}</div><div>{{ item.title }}</div></div>

        <div class="author">{{ item.author }} {{ item.created_at }}</div>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'NewsContent',
  props: {
    tags: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      page: 1,
      list: []
    }
  },
  methods: {
    ...mapActions('infiniteScroll', {
      GetNewsFeeds: 'GetNewsFeeds'
    }),
    infiniteHandler($state) {
      this.GetNewsFeeds({ page: this.page, tags: this.tags })
        .then((data) => {
          if (data.hits.length) {
            this.page += 1
            this.list.push(...data.hits)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.news-container
  margin-top 50px
  height calc( 100hv - 50px )

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
