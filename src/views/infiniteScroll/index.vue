<template>
  <div>
    <header>
      Hacker News header
    </header>
    <div v-for="(item, $index) in list" :key="$index">
      <!-- Hacker News item loop -->
      <div>
        <div>{{ item.title }}</div>
        <div>{{ item.objectID }}</div>
        <div>{{ item.author }}</div>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'InfiniteScroll',
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
      this.GetNewsFeeds({ page: this.page })
        .then((data) => {
          console.log('data', data)
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

</style>
