import ajax from '@/utils/ajax'
import { PARAMS, TYPES, PER_PAGE } from '@/constants/OMDb'

// Mutation types
export const SET_STATE = 'SET_STATE'

export default {
  namespaced: true,
  state: {
    search: '',
    page: 0,
    isLoading: false,
    results: [/* {
      Title<string>
      Year<string - YYYY>
      imdbID<string - UUID>
      Type<string - 'movie'>
      Poster<string - URL|'N/A'>
    } */],
    total: 0
  },
  getters: {
    isLessThan1Page ({ total }) {
      return total <= PER_PAGE
    },
    hasNextPage ({ page, total }) {
      return page * PER_PAGE < total
    }
  },
  mutations: {
    [SET_STATE] (state, nextState) {
      Object.assign(state, nextState)
    }
  },
  actions: {
    async search ({ commit, state }, { search = state.search, page = 1 }) {
      commit(SET_STATE, { isLoading: true })

      const { Search, totalResults } = await ajax({
        params: {
          [PARAMS.TYPE]: TYPES.MOVIE,
          [PARAMS.SEARCH]: search,
          [PARAMS.PAGE]: page
        }
      })
      commit(SET_STATE, {
        search,
        page,
        isLoading: false,
        results: Search,
        total: totalResults
      })
    }
  }
}
