<template>
  <div :class="['-detail-panel', { 'is-loading': isLoading }]">
    <article v-if="detail" class="content">
      <pic
        :src="detail.Poster"
        :alt="`Poster of ${detail.Title}`"
        class="is-pulled-right"
      />
      <h1>{{ detail.Title }}</h1>
      <p>{{ detail.Genre }}</p>
      <p>{{ detail.Plot }}</p>
      <ul>
        <li v-for="field in REQUIRED_FIELDS.slice(-4)" :key="field">
          <b>{{ field | labelify }}:</b> {{ detail[field] }}
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
import pick from 'lodash/pick'
import ajax from '@/utils/ajax'
import Pic from '@/components/Pic'
import { PARAMS, TYPES } from '@/constants/OMDb'
import { QUERY_MOVIE_ID } from '@/constants/routeFields'

export default {
  components: { Pic },
  data: () => ({
    REQUIRED_FIELDS: 'Poster Title Genre Plot Language Director Actors Runtime'.split(' '),
    isLoading: false,
    detail: null // <object - with REQUIRED_FIELDS>
  }),
  computed: {
    movieId () {
      return this.$route.query[QUERY_MOVIE_ID]
    }
  },
  watch: {
    movieId: {
      handler (id) {
        id && this.fetchDetail(id)
      },
      immediate: true
    }
  },
  methods: {
    async fetchDetail (id) {
      this.isLoading = true
      const resData = await ajax({
        params: {
          [PARAMS.TYPE]: TYPES.MOVIE,
          [PARAMS.ID]: id
        }
      })
      this.isLoading = false
      this.detail = pick(resData, this.REQUIRED_FIELDS)
    }
  },
  filters: {
    labelify: field => ({
      Runtime: 'Duration'
    })[field] || field
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/bulma.scss";

.-detail-panel {
  // refer to https://github.com/jgthms/bulma/issues/847#issuecomment-314110630
  &.is-loading {
    position: relative;
    pointer-events: none;
    opacity: 0.5;
    &:after {
      @include loader;
      position: absolute;
      top: calc(50% - 2.5em);
      left: calc(50% - 2.5em);
      width: 5em;
      height: 5em;
      border-width: 0.25em;
    }
  }

  // refer to  https://github.com/jgthms/bulma/issues/151#issuecomment-204103843
  .content ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>
