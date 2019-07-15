<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <button class="button pagination-previous" aria-label="previous page">
      <fa-icon :icon="faCaretLeft" />
    </button>
    <span class="pagination-list">
      11 / 111
    </span>
    <button class="button pagination-next" aria-label="next page">
      <fa-icon :icon="faCaretRight" />
    </button>
  </nav>
</template>
<script>
import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default {
  components: { FaIcon },
  data: () => ({
    faCaretLeft,
    faCaretRight
  })
}
</script>
