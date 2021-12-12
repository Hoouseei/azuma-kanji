<template lang="pug">
  img(:width="$attrs.width", :height="$attrs.height", ref="img")
</template>

<script>
export default {
  data() {
    return {}
  },

  mounted() {
    const canvas = document.createElement('canvas')
    canvas.width = this.$attrs.width
    canvas.height = this.$attrs.height
    const ctx = canvas.getContext('2d')

    const img = new Image()
    img.onload = (e) => {
      ctx.drawImage(img, 0, 0, this.$attrs.width, this.$attrs.height)
      this.$refs.img.src = canvas.toDataURL()
    }
    img.src = this.$attrs.src
  }
}
</script>
