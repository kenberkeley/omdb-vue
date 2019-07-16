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
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('search')

export default {
  components: { FaIcon },
  data: () => ({
    faCaretLeft,
    faCaretRight
  }),
  computed: {
    ...mapState([
      'page',
      'total',
      'isLoading'
    ]),
    ...mapGetters([
      'hasNextPage'
    ])
  },
  methods: {
    ...mapActions([
      'search'
    ]),
    turnPage (page) {
      this.search({ page })
    }
  }
}
</script>
