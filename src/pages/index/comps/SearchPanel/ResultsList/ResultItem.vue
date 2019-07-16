<template>
  <router-link class="-result-item" :to="url">
    <div class="box">
      <div class="media">
        <div class="media-content">
          <p class="title is-6 -result-item-title">
            {{ title }}
          </p>
          <p class="subtitle is-7 is-pulled-right">
            {{ year }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
import { QUERY_MOVIE_ID } from '@/constants/routeFields'

export default {
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true }
  },
  computed: {
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
  margin-bottom: .5rem;

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
