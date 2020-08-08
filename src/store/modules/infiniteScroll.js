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
    async GetNewsFeeds({ commit }, { page, tags }) {
      try {
        const data = await feeds({ page, tags })
        // commit('SET_NEWS_FEEDS', data)
        return data
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}

export default scroll
