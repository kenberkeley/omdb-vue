<template>
  <div class="columns">
    <div class="column">
      <search-panel />
    </div>
    <div v-if="movieId" class="column is-two-thirds">
      <detail-panel :movie-id="movieId" />
    </div>
  </div>
</template>
<script>
import SearchPanel from './comps/SearchPanel/'
import DetailPanel from './comps/DetailPanel'
import { QUERY_MOVIE_ID } from '@/constants/routeFields'

export default {
  components: { SearchPanel, DetailPanel },
  computed: {
    movieId () {
      return this.$route.query[QUERY_MOVIE_ID]
    }
  }
}
</script>
