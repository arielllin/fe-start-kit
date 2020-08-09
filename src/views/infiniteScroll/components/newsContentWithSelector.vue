<template>
  <div>
    <div class="btn" @click="onClickShowPopup"> select date </div>
    <div class="news-container">
      <news-content-item v-for="(item, $index) in list" :key="$index" :item="item" :tags="tags" />
      <infinite-loading v-if="status==='loading'" @infinite="infiniteHandler" />
      <date-picker-popup ref="date-pick-popup" @confirm-date="onConfirmedDate" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import newsContentItem from './newsContentItem'
import datePickerPopup from './datePickerPopup'
export default {
  name: 'NewsContentWithSelector',
  components: {
    newsContentItem,
    datePickerPopup
  },
  props: {
    tags: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      startDate: null,
      endDate: new Date(),
      status: 'waiting', // 控制infinite-loading 元件, 只有在loading時有用 狀態( waiting <-> loading )
      page: 1,
      list: []
    }
  },
  methods: {
    ...mapActions('infiniteScroll', {
      GetNewsFeeds: 'GetNewsFeeds'
    }),

    onClickShowPopup() {
      this.status = 'waiting'
      this.$refs['date-pick-popup'].toggle()
    },

    onConfirmedDate(startDate, endDate) {
      console.log('onConfirmedDate', startDate)

      // 確認日期時初始化 清掉 page 與 list
      this.list = []
      this.page = 1

      this.startDate = startDate
      this.endDate = endDate

      // 讓 infinite-loading 元件作用
      this.status = 'loading'
    },

    infiniteHandler($state) {
      this.GetNewsFeeds({ page: this.page,
        tags: this.tags,
        startDate: this.startDate,
        endDate: this.endDate
      })
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
.btn
  display flex
  align-items center
  justify-content center
  background-color #666666
  color white
  height 30px

.news-container
  margin-top 50px
  height calc( 100hv - 50px )
</style>
