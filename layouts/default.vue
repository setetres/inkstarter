<template>
  <Nuxt />
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },

  head() {
    return {
      title: 'InkStarter',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
