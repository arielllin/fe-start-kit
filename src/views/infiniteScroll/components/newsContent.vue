<template>
  <div class="news-container">
    <news-content-item v-for="(item, $index) in list" :key="$index" :item="item" :tags="tags" />
    <infinite-loading @infinite="infiniteHandler" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import newsContentItem from './newsContentItem'
export default {
  name: 'NewsContent',
  components: {
    newsContentItem
  },
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
    initRange() {
      // TODO 可以在這邊依照tags 狀態 給予日期 虛擬碼
      // if tags === 1day , startDate = endDate - 1 , endDate = yy
      // if tags === 7day , startDate = endDate - 7 , endDate = yy
      // if tags === yesterday-day , startDate = endDate - 2 , endDate = today - 1
      return {
        startDate: new Date(),
        endDate: new Date()
      }
    },
    infiniteHandler($state) {
      const { startDate, endDate } = this.initRange() // 給定日期

      this.GetNewsFeeds({ page: this.page, tags: this.tags, startDate, endDate })
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
</style>
