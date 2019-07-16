import ajax from '@/utils/ajax'
import { PARAMS, TYPES, PER_PAGE } from '@/constants/OMDb'
import { QUERY_SEARCH, QUERY_PAGE_NUM } from '@/constants/routeFields'

// Mutation types
export const SET_STATE = 'SET_STATE'

export default {
  namespaced: true,
  state: {
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
    search (state, getters, rootState) {
      const search = rootState.route.query[QUERY_SEARCH]
      return search ? decodeURIComponent(search) : ''
    },
    page (state, getters, rootState) {
      const page = +rootState.route.query[QUERY_PAGE_NUM]
      return Number.isInteger(page) && page >= 1 ? page : 1
    },
    isLessThan1Page ({ total }) {
      return total <= PER_PAGE
    },
    hasNextPage ({ total }, { page }) {
      return page * PER_PAGE < total
    }
  },
  mutations: {
    [SET_STATE] (state, nextState) {
      Object.assign(state, nextState)
    }
  },
  actions: {
    // TODO: cache the results?
    async search ({ commit, getters }) {
      const { search } = getters
      if (!search) {
        commit(SET_STATE, { results: [], total: 0 })
        return
      }

      commit(SET_STATE, { isLoading: true })
      const { Search, totalResults } = await ajax({
        params: {
          [PARAMS.TYPE]: TYPES.MOVIE,
          [PARAMS.SEARCH]: search,
          [PARAMS.PAGE]: getters.page
        }
      })
      commit(SET_STATE, {
        isLoading: false,
        results: Search,
        total: totalResults
      })
    }
  }
}
