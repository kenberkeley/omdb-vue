<template>
  <div class="field has-addons">
    <div class="control has-icons-left">
      <span class="icon is-left">
        <fa-icon :icon="searchIcon" />
      </span>
      <input
        v-model="keywords"
        class="input"
        placeholder="Search movies..."
      />
    </div>
    <div class="control">
      <button class="button is-primary">
        Search
      </button>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
  components: { FaIcon },
  data: () => ({
    keywords: ''
  }),
  computed: {
    searchIcon () {
      return faSearch
    }
  }
}
</script>
