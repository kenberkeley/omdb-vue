<template>
  <div>
    <search-input />
    <results-list />
    <pagination />
  </div>
</template>
<script>
import SearchInput from './comps/SearchInput'
import ResultsList from './comps/ResultsList/'
import Pagination from './comps/Pagination'

export default {
  components: { SearchInput, ResultsList, Pagination }
}
</script>
