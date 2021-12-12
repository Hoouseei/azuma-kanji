<template lang="pug">
v-main
  v-card
    v-navigation-drawer(fixed, floating, permanent, clipped, color="transparent", )
      v-list(dense, nav).index-list
        v-list-item.index-item(v-for="i in index", :key="i.id", nav, link, :href="`#${i.id}`")
          v-list-item-content
            v-list-item-title.font-weight-bold.subtitle-1
              |{{i.title}}

  .category-list
    section.category-item(v-for="i in index", :key="i.id")
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

  },

  data() {
    return {
      index: [
        {title: "ひらがな", id: "hiragana"},
        {title: "カタカナ", id: "katakana"},
        {title: "小学１年生", id: "ps1"},
        {title: "小学２年生", id: "ps2"},
        {title: "小学３年生", id: "ps3"},
        {title: "小学４年生", id: "ps4"},
        {title: "小学５年生", id: "ps5"},
        {title: "小学６年生", id: "ps6"},
      ]
    }
  },

  computed: {
    getAll() {
      return this.$store.getters['characters/getAll']
    }
  },
}
</script>

<style lang="stylus">
main
  position relative

  .close-btn
    top 10px
    left 10px

.index
  &-list
    display flex
    flex-direction: column
    align-items: center
    height 100vh
    padding 160px 0
  &-item
    min-height 20px !important

.category
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
    width 1100px
    margin 0 auto
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
    line-height 88px
    color #000 !important
    text-align justify

  
</style>
