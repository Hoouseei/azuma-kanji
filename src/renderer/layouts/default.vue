<template lang="pug">
  main(ref="scrollable")
    v-app(style="background-color: transparent")
      v-app-bar(app, color="transparent", elevation=0)
        v-btn.close-btn(v-if="$route.path === '/'", absolute, @click='quit') おしまい
        v-btn.index-btn(v-if="$route.path !== '/'", absolute, to="/", nuxt) ぜんぶ
      Nuxt

</template>

<script>
const {
    ipcRenderer
} = require("electron")

export default {
  methods: {
    quit(e) {
      console.log(e.target.parentElement.classList)
      if(!e.target.parentElement.classList.contains('clise-btn')) return
      if(confirm('ほんとうにおわる？')) ipcRenderer.send('quit')
    },
  }
}
</script>

<style lang="stylus">
body
  overflow hidden
  background-color #d4dad4
  font-family: 'Noto Sans CJK JP'
  font-weight bold
  font-size 24px
  color #000

main
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

  .v-main
    overflow-y scroll


</style>
