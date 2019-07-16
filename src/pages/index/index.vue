<template>
  <div class="columns">
    <div class="column is-one-thirds-tablet is-one-quarter-desktop">
      <search-panel />
    </div>
    <div class="column is-two-thirds-tablet is-three-quarter-desktop">
      <detail-panel />
    </div>
  </div>
</template>
<script>
import SearchPanel from './comps/SearchPanel/'
import DetailPanel from './comps/DetailPanel'

export default {
  components: { SearchPanel, DetailPanel }
}
</script>
