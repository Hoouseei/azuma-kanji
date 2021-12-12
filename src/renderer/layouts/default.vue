<template lang="pug">
  main(ref="scrollable", @mousedown="onMouseDown", @mousemove="onMouseMove", @mouseup="onMouseUp")
    v-app(style="background-color: transparent")
      v-app-bar(app, color="transparent", elevation=0)
        v-btn.close-btn(absolute, @click='quit') おしまい
        v-btn.index-btn(v-if="$route.path !== '/'", absolute, to="/", nuxt) ぜんぶ
      Nuxt

</template>

<script>
export default {
  methods: {
    quit() {
      ipcRenderer.send('quit')
    },

    onMouseDown(e) {
      this.isGrabing = true

      this.pos = {
        left: this.$refs.scrollable.scrollLeft,
        top: this.$refs.scrollable.scrollTop,
        x: e.clientX,
        y: e.clientY,
      }
    },

    onMouseMove(e) {
      if(!this.isGrabing) return

      const dy = e.clientY - this.pos.top
      const dx = e.clientX - this.pos.left
      this.$refs.scrollable.scrollTop = this.pos.y - dy
      this.$refs.scrollable.scrollLeft = this.pos.x - dx
    },

    onMouseUp(e) {
      this.isGrabing = false
    },
  }
}
</script>

<style lang="stylus">
body
  background-color #d4dad4
  font-family: 'Noto Sans CJK JP'
  font-weight bold
  font-size 24px
  color #000

main
  overflow auto
  position relative
  user-select: none
  a
    text-decoration none
    color #000

  .close-btn
    top 10px
    left 10px

  .index-btn
    top 10px
    right 10px

</style>
