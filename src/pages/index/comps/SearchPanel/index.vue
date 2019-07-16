<template>
  <section>
    <search-input :default-value="search" />
    <results-list />
    <pagination v-if="!isLessThan1Page" />
  </section>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import debounce from 'lodash/debounce'
import SearchInput from './SearchInput'
import ResultsList from './ResultsList/'
import Pagination from './Pagination'
import { QUERY_SEARCH, QUERY_PAGE_NUM } from '@/constants/routeFields'

const { mapGetters, mapActions } = createNamespacedHelpers('search')

export default {
  components: { SearchInput, ResultsList, Pagination },
  computed: mapGetters([
    'search',
    'isLessThan1Page'
  ]),
  mounted () {
    this.search && this.runSearch()
  },
  watch: {
    [`$route.query.${QUERY_SEARCH}`]: 'runSearch',
    [`$route.query.${QUERY_PAGE_NUM}`]: 'runSearch'
  },
  methods: {
    ...mapActions({
      _runSearch: 'search'
    }),
    runSearch: debounce(function () {
      this._runSearch()
    })
  }
}
</script>
