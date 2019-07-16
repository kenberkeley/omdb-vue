<template>
  <nav class="pagination is-centered" aria-label="pagination" role="navigation">
    <button
      aria-label="previous page"
      class="button pagination-previous"
      :class="{ 'is-loading': isLoading }"
      :disabled="page <= 1"
      @click="turnPage(page - 1)">
      <fa-icon :icon="faCaretLeft" />
    </button>
    <span class="pagination-list">
      Page {{ page }}, {{ total }} results
    </span>
    <button
      aria-label="next page"
      class="button pagination-next"
      :class="{ 'is-loading': isLoading }"
      :disabled="!hasNextPage"
      @click="turnPage(page + 1)">
      <fa-icon :icon="faCaretRight" />
    </button>
  </nav>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { QUERY_PAGE_NUM } from '@/constants/routeFields'

const { mapState, mapGetters } = createNamespacedHelpers('search')

export default {
  components: { FaIcon },
  data: () => ({
    faCaretLeft,
    faCaretRight
  }),
  computed: {
    ...mapState([
      'total',
      'isLoading'
    ]),
    ...mapGetters([
      'page',
      'hasNextPage'
    ])
  },
  methods: {
    turnPage (page) {
      this.$router.push({
        query: {
          ...this.$route.query,
          [QUERY_PAGE_NUM]: page
        }
      })
    }
  }
}
</script>
