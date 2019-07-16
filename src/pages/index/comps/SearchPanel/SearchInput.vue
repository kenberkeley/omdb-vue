<template>
  <form @submit.prevent="onSearch">
    <div class="field has-addons">
      <div class="control has-icons-left">
        <span class="icon is-left">
          <fa-icon :icon="faSearch" />
        </span>
        <input
          class="input"
          v-model.trim="keywords"
          placeholder="Search movies..."
        />
      </div>
      <div class="control">
        <button type="submit" class="button is-primary">
          Search
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import { mapActions } from 'vuex'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
  components: { FaIcon },
  data: () => ({
    keywords: '',
    faSearch
  }),
  methods: {
    ...mapActions('search', [
      'search'
    ]),
    onSearch () {
      this.search({
        search: this.keywords
      })
    }
  }
}
</script>
