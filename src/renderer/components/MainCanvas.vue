<template>
<div class="canvasWrapper" ref='wrapper'>
  <canvas ref="canvas"></canvas>
</div>
</template>


<script>
import Clock from '~/assets/scripts/clock.js'
export default {
  data() {
    return {
      mountains: []
    }
  },
  mounted() {
    this.clock = new Clock(this.$refs.wrapper, this.$refs.canvas)
  }
}
</script>

<style scoped>
.canvasWrapper {
  position: absolute;
  height: 100vh;
  width: 100vw;
}
</style>
