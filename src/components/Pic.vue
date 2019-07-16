<template>
  <img :src="url">
</template>
<script>
import defaultImage from '@/assets/images/default-image.jpg'

export default {
  props: {
    src: { type: String, required: true }
  },
  computed: {
    url () {
      const { src } = this
      if (src === 'N/A') {
        return defaultImage
      }
      return src
    }
  }
}
</script>
