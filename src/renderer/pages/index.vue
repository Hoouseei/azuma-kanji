<template lang="pug">
v-main(@mousedown="onMouseDown", @mousemove="onMouseMove", @mouseup="onMouseUp")
  v-card
    v-navigation-drawer(fixed, floating, permanent, clipped, color="transparent", )
      v-list(dense, nav).index-list
        v-list-item.index-item(v-for="i in index", :key="i.id", nav, link, :href="`#${i.id}`")
          v-list-item-content
            v-list-item-title.font-weight-bold.subtitle-1
              |{{i.title}}

  .category-list
    section.category-item(v-for="i in index", :key="i.id", v-if="i.visible", :class="{visible: i.visible}")
      h1.category-title(:id="i.id")
        |{{i.title}}
      v-row.character-list(justify="space-between")
        v-col.character-item(v-for="(char) in getAll[i.id]", :key='char.id')
          nuxt-link(:to="`/characters/${i.id}/${char.id}`", nuxt).character-btn
            |{{char.character}}


</template>

<script>
import { mapGetters } from 'vuex'
const {ipcRenderer} = require('electron');

export default {
  mounted() {
      this.showingCount = 0
      this.showSection()
  },

  data() {
    return {
      index: [
        {title: "漢数字", id: "kansuji", visible: false},
        {title: "ひらがな", id: "hiragana", visible: false},
        {title: "カタカナ", id: "katakana", visible: false},
        {title: "小学１年生", id: "ps1", visible: false},
        {title: "小学２年生", id: "ps2", visible: false},
        {title: "小学３年生", id: "ps3", visible: false},
        {title: "小学４年生", id: "ps4", visible: false},
        {title: "小学５年生", id: "ps5", visible: false},
        {title: "小学６年生", id: "ps6", visible: false},
      ]
    }
  },

  computed: {
    getAll() {
      return this.$store.getters['characters/getAll']
    }
  },

  methods: {
    showSection() {
      if(this.showingCount >= this.index.length) return
      this.index[this.showingCount].visible = true
      this.showingCount++
      setTimeout(this.showSection, 500)
    },
    
    onMouseDown(e) {
      return
      this.isGrabing = true

      this.pos = {
        left: this.$refs.scrollable.scrollLeft,
        top: this.$refs.scrollable.scrollTop,
        x: e.clientX,
        y: e.clientY,
      }
    },

    onMouseMove(e) {
      return
      if(!this.isGrabing) return

      const dy = e.clientY - this.pos.top
      const dx = e.clientX - this.pos.left
      this.$refs.scrollable.scrollTop = this.pos.y - dy
      this.$refs.scrollable.scrollLeft = this.pos.x - dx
    },

    onMouseUp(e) {
      return
      this.isGrabing = false
    },
  }
}
</script>

<style lang="stylus">
main
  position relative
  overflow auto
  overflow-y scroll

  .close-btn
    top 10px
    left 10px

.index
  &-list
    display grid
    // flex-direction: column
    // align-items: center
    gap 10px
    height 100vh
    padding 160px 0 0
  &-item
    min-height 20px !important

.category
  &-list
    // padding-left 256px
  &-item
    margin-bottom 100px
  &-title
    position relative
    margin-bottom 50px
    text-align center
    &:before
    &:after
      position absolute
      top 50%
      display block
      content ''
      height 3px
      width 150px
      background-color #000
    &:before
      left 25%
    &:after
      right 25%

.character
  &-list
    display grid
    grid-template-columns: repeat(8, 80px)
    width 100vw
    margin 0 auto
    padding-left 256px
    &:after
      content ''
      display block
      width 0
      margin-right auto
      margin-left 0
  &-btn
    display flex
    justify-content: center
    align-content: center
    width 80px
    height 80px
    border-radius: 50%
    background-color #fff
    font-size 52px
    font-weight 500
    line-height 88px
    color #000 !important
    text-align justify

  
</style>
