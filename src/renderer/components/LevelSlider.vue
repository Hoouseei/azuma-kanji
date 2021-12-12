<template>
  <div class="wrapper">
    <v-slider
      class="custom-slider"
      step="1"
      v-model="level"
      color="#0b3341"
      track-color="#0b3341"
      :max="max"
      tick-size=10
      :tick-labels="ticksLabels"
    ></v-slider>
  </div>
</template>

<script>
export default {
  data() {
    const max = 2
    let arr = Array(max).fill('')
    arr[0] = 'かんたん'
    arr[Math.round(arr.length/2)] = 'ふつう'
    arr[arr.length] = 'むずかしい'
    return {
      max: max,
      ticksLabels: arr
    }
  },
  computed: {
    level: {
      get() {
        // return this.$store.level.level
      },
      set(level) {
        this.$store.commit('level/setLevel', level)
      }
    }
  },
  methods: {
  }

}
</script>

<style lang="stylus" scoped>
.wrapper
  position absolute
  bottom 15px
  z-index 100
  width 100%
  padding 0 30px

</style>
