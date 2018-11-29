<template>
  <div class="wrap-outer">
    <top-banner></top-banner>

  </div>
</template>

<script>
import topBanner from './comps/topBanner'

export default {
  name: 'open-video-page',
  components: {
    topBanner
  },
  data () {
    return {
      title: "WHAT'S YOUR NEXT STATION ?"
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

</style>
