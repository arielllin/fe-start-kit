<template>
  <div>
    <van-tabs v-model="activeName">
      <van-tab title="story(昨天)" name="story">
        <news-content :tags="activeName" />
      </van-tab>
      <van-tab title="poll(今天)" name="poll">
        <news-content :tags="activeName" />
      </van-tab>
      <van-tab title="ask_hn(7天)" name="ask_hn">
        <news-content :tags="activeName" />
      </van-tab>
      <van-tab title="comment(自選)" name="comment">
        <news-content-with-selector :tags="activeName" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NewsContent from './components/newsContent'
import NewsContentWithSelector from './components/newsContentWithSelector'
export default {
  name: 'InfiniteScroll',
  components: {
    NewsContentWithSelector,
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
