<template>
  <div :class="['-detail-panel', { 'is-loading': isLoading }]">
    <div v-if="detail" class="columns">
      <div class="column">
        <article class="content">
          <h1>{{ detail.Title }} ({{ detail.Year }})</h1>
          <p>{{ detail.Genre }}</p>
          <p>{{ detail.Plot }}</p>
          <ul>
            <li v-for="field in REQUIRED_FIELDS.slice(-4)" :key="field">
              <b>{{ field | labelify }}:</b> {{ detail[field] }}
            </li>
          </ul>
        </article>
      </div>
      <div class="column">
        <figure class="-poster is-clearfix">
          <pic
            :src="detail.Poster"
            :alt="`Poster of ${detail.Title}`"
            class="is-pulled-left"
          />
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
import animateScrollTo from 'animated-scroll-to'
import pick from 'lodash/pick'
import ajax from '@/utils/ajax'
import Pic from '@/components/Pic'
import { PARAMS, TYPES } from '@/constants/OMDb'

export default {
  components: { Pic },
  props: {
    movieId: { type: String, required: true }
  },
  data: () => ({
    REQUIRED_FIELDS: 'Poster Title Year Genre Plot Language Director Actors Runtime'.split(' '),
    isLoading: false,
    detail: null // <object - with REQUIRED_FIELDS>
  }),
  watch: {
    movieId: {
      handler: 'fetchDetail',
      immediate: true
    }
  },
  methods: {
    async fetchDetail () {
      this.isLoading = true
      const resData = await ajax({
        params: {
          [PARAMS.TYPE]: TYPES.MOVIE,
          [PARAMS.ID]: this.movieId
        }
      })
      this.isLoading = false
      this.detail = pick(resData, this.REQUIRED_FIELDS)
      this.$nextTick(() => {
        animateScrollTo(this.$el) // TODO: unnecessary if >= desktop
      })
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

  @include from($tablet) {
    margin-top: .5rem;
    padding-left: 2rem;
    height: calc(100vh - 2.75rem);
    border-left: 1px solid #ccc;
  }

  // refer to  https://github.com/jgthms/bulma/issues/151#issuecomment-204103843
  .content {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }

  .-poster {
    min-height: 400px;
  }
}
</style>
