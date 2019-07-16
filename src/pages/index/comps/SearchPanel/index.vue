<template>
  <div>
    <search-input />
    <results-list />
    <pagination v-if="!isLessThan1Page" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SearchInput from './SearchInput'
import ResultsList from './ResultsList/'
import Pagination from './Pagination'

export default {
  components: { SearchInput, ResultsList, Pagination },
  computed: mapGetters('search', [
    'isLessThan1Page'
  ])
}
</script>
