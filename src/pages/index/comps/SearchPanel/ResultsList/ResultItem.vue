<template>
  <li class="-result-item">
    <router-link :to="url">
      <div class="box">
        <div class="media">
          <div class="media-content">
            <p class="-result-item-title title is-6 is-clearfix">
              {{ title }}
              <fa-icon
                v-if="shouldShowStar"
                :icon="faStar"
                class="is-pulled-right has-text-grey"
              />
            </p>
            <p class="subtitle is-7 is-pulled-right">
              {{ year }}
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </li>
</template>
<script>
import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { QUERY_MOVIE_ID } from '@/constants/routeFields'

export default {
  components: { FaIcon },
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true }
  },
  data: () => ({
    faStar
  }),
  computed: {
    shouldShowStar () {
      return this.$route.query[QUERY_MOVIE_ID] === this.id
    },
    url () {
      const { $route, id } = this
      return {
        path: $route.path,
        query: {
          ...$route.query,
          [QUERY_MOVIE_ID]: id
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/bulma.scss";

.-result-item {
  display: block;
  margin: .5rem 0;

  > a {
    display: block;
  }

  &:hover {
    .-result-item-title {
      text-decoration: underline;
    }
  }

  .-result-item-title {
    color: $primary;
  }

  .box {
    padding: .5rem;
    margin-bottom: 0;
  }
}
</style>
