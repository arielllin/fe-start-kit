import { feeds } from '@/api/infiniteScroll'

const scroll = {
  namespaced: true,
  state: {
    // feeds: []
  },
  mutations: {
    // SET_NEWS_FEEDS: (state, feeds) => {
    //   state.feeds = feeds
    // }
  },
  actions: {
    async GetNewsFeeds({ commit }, { page, tags, startDate, endDate }) {
      try {
        const data = await feeds({ page, tags, startDate, endDate })
        // console.log('GetNewsFeeds', data)
        return data
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}

export default scroll
