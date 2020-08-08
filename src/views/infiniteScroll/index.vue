<template>
  <div>
    <van-tabs v-model="activeName">
      <van-tab title="story" name="story">
        <news-content :tags="activeName" />
      </van-tab>
      <van-tab title="poll" name="poll">
        <news-content :tags="activeName" />
      </van-tab>
      <van-tab title="ask_hn" name="ask_hn">
        <news-content :tags="activeName" />
      </van-tab>
      <van-tab title="comment" name="comment">
        <news-content :tags="activeName" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NewsContent from './components/newsContent'
export default {
  name: 'InfiniteScroll',
  components: {
    NewsContent
  },
  data() {
    return {
      activeName: 'story'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
