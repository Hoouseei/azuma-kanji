<template lang="pug">
main
  v-row(
    align='center',
    align-content='center',
    justify='space-around'
  ).character-wrapper
    v-col(v-if="$store.state.level.isShowCopybook")
      figure.character-anim
        img(v-if="$store.state.level.isShowStroke", :src="gif", width=500, height=500)
        StopedImage(v-if="!$store.state.level.isShowWatermark", :src="gif", width=500, height=500).stoped
        p(v-if="$store.state.level.isShowCopybook").yomigana-list
          span(v-for="y in yomigana").yomigana-item {{y}}
    v-col 
      figure.main-canvas
        DrawableCanvas(width=500, height=500, ref="canvas")
        //- img(:src="gif", width=500, height=500).stoped
        StopedImage(v-if="$store.state.level.isShowWatermark", :src="gif", width=500, height=500).stoped
        p(v-if="!$store.state.level.isShowCopybook").yomigana-list
          span(v-for="y in yomigana").yomigana-item {{y}}
  LevelSlider
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
      character: "",
      details: [],
      yomigana: [],
      gif: require(`@/assets/characters/${this.$route.params.category}/${this.$route.params.id}.gif`),
      category: this.$route.params.category
    }
  },

  mounted() {
    const d = this.getAll[this.$route.params.category].find((c) => c.id == this.$route.params.id)
    this.$data.character = d.character
    this.$data.details = d.details
    this.$data.yomigana = d.yomigana
  },

  computed: {
    getAll() {
      return this.$store.getters['characters/getAll']
    },
  },
  
  methods: {
    quit() {
      ipcRenderer.send('quit')
    },
    onClickClear() {
      this.$refs.canvas.onClickClear()
    }
  },
  
}
</script>

<style lang="stylus">
main
  overflow hidden
  height 100vh
  width 100vw

.character-wrapper
  height 100%

.clear-btn
  position absolute
  right 10px
  top 10px
  z-index: 110
  font-size 30px
  line-height 1
  
figure
  position relative
  width 500px
  height 500px
  margin 0 auto
  background-color #fff
  .stoped
    position absolute
    top 0
    left 0
    z-index: 0
  img
  canvas
    position relative
    z-index: 100

.main-canvas
  .stoped
    opacity 0.2

.yomigana
  &-list
    position absolute
    left 0
    top 500px
  &-item
    margin-right 20px
    white-space: nowrap
</style>
