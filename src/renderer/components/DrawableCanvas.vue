<template lang="pug">
  div.wrapper
    canvas(ref="canvas", :width="$attrs.width", :height="$attrs.height", @mousedown="onMouseDown", @mouseup="onMouseUp", @mousemove="onMouseMove")
    a(href="#", @click.prevent="onClickClear").clear-btn ✕
</template>

<script>
export default {
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d')
    this.ctx.lineCap = 'round'
    this.ctx.lineWidth = 30
    this.count = 0
    this.isGrid = true
  },
  
  methods: {
    onMouseDown(e) {
      this.drawing = true
      this.count++
      this.ctx.beginPath()
      this.ctx.strokeStyle = `hsl(${(360/30)*this.count}, 100%, 50%)`
    },

    onMouseUp(e) {
      this.drawing = false
    },

    onMouseMove(e) {
      if(!this.drawing) return
      this.ctx.lineTo(e.offsetX, e.offsetY)
      this.ctx.stroke()
    },

    onClickClear() {
      this.ctx.clearRect(0, 0, this.$attrs.width, this.$attrs.height)
      this.count = 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position relative
  &:before
  &:after
    position absolute
    display block
    content ''
    border-style dashed
    border-width 1px
    border-color #ccc
  &:before
    left 50%
    top 0
    width 1px
    height 500px
  &:after
    top 50%
    left 0
    width 500px
    height 1px
</style>
