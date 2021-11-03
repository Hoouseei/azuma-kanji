<template>
  <main>
    <client-only>
      <v-app>
        <v-main>
          <MainCanvas />
          <InfoWrapper v-if="isShowText" />
          <LevelSlider></LevelSlider>
          <SettingModal v-model='isShowSetting'></SettingModal>
          <v-btn
          class="close-btn"
          absolute
          @click="quit"
          >おしまい</v-btn>
        </v-main>
      </v-app>
    </client-only>
  </main>
</template>

<script>
const {ipcRenderer} = require('electron');

import LevelManager from '~/assets/scripts/level-manager.js'

export default {
  mounted() {
    this.update()
  },
  data() {
    return {
      isShowText: LevelManager.levelStatus.isShowText,
      isShowSetting: false
    }
  },
  methods: {
    update: function() {
      requestAnimationFrame(this.update)
      this.isShowText = LevelManager.levelStatus.isShowText
    },
    quit() {
      ipcRenderer.send('quit')
    }
  }
}
</script>

<style lang="stylus">
main
  position relative
  width 1280px
  height 800px
  font-family: 'Noto Sans CJK JP'
  font-weight bold

  .close-btn
    top 10px
    left 10px
</style>
