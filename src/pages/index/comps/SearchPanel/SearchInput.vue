<template>
  <form @submit.prevent="onSearch">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          class="input is-medium"
          v-model.trim="keywords"
          placeholder="Search movies..."
        />
      </div>
      <div class="control">
        <button type="submit" class="button is-medium is-primary">
          <span class="icon">
            <fa-icon :icon="faSearch" />
          </span>
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { QUERY_SEARCH, QUERY_PAGE_NUM } from '@/constants/routeFields'

export default {
  components: { FaIcon },
  props: {
    defaultValue: { type: String, default: '' }
  },
  data () {
    return {
      keywords: this.defaultValue,
      faSearch
    }
  },
  methods: {
    onSearch () {
      const { keywords } = this
      if (!keywords) return

      this.$router.push({
        query: {
          [QUERY_SEARCH]: encodeURIComponent(keywords),
          [QUERY_PAGE_NUM]: 1
        }
      })
    }
  }
}
</script>
