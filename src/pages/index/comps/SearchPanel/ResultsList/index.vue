<template>
  <ul>
    <result-item
      v-for="item in results"
      :key="item.imdbID"
      :id="item.imdbID"
      :title="item.Title"
      :year="item.Year"
    />
  </ul>
</template>
<script>
import { mapState } from 'vuex'
import ResultItem from './ResultItem'

export default {
  components: { ResultItem },
  computed: mapState('search', [
    'results'
  ])
}
</script>
