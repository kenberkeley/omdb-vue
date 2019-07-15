<template>
  <div>
    <result-item v-for="i in 10" :key="i" />
  </div>
</template>
<script>
import ResultItem from './ResultItem'

export default {
  components: { ResultItem }
}
</script>
