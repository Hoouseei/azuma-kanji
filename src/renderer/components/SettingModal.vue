<template>
  <div class="">
    <v-dialog
      fullscreen
      v-model="isShowSetting"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="btn-open-modal"
          v-bind="attrs"
          v-on="on"
          x-large
          @click="open"
        >じかんをかえる</v-btn>
      </template>
      <v-card>
          <v-list
            three-line
            subheader
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>じ</v-list-item-title>
                <v-slider
                  class="custom-slider"
                  ref="hours-slider"
                  thumb-label
                  v-model="hours"
                  min="0"
                  max="11"
                ></v-slider>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>ふん</v-list-item-title>
                <v-slider
                  class="custom-slider"
                  ref="minutes-slider"
                  thumb-label
                  v-model="minutes"
                  min="0"
                  max="59"
                ></v-slider>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>びょう</v-list-item-title>
                <v-slider
                  class="custom-slider"
                  ref="seconds-slider"
                  thumb-label
                  v-model="seconds"
                  min="0"
                  max="59"
                ></v-slider>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-row
            width="600"
            align="center"
            dense
            no-gutters
            justify="space-around">
            <v-btn
              class="btn-save"
              x-large
              @click="reset"
            >いまのじかんにする</v-btn>
            <v-btn
              class="btn-save"
              x-large
              @click="randomize"
            >ランダムにする</v-btn>
          </v-row>

          <v-row
            class="mt-10"
          width="600"
          align="center"
          dense
          no-gutters
          justify="space-around">
            <v-btn
              class="btn-save"
              x-large
              @click="cancel"
              color="error"
            >じかんをかえない</v-btn>
            <v-btn
              class="btn-save"
              x-large
              @click="save"
              color="primary"
            >じかんをかえる</v-btn>
          </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import TimeManager from '~/assets/scripts/time-manager.js'
export default {
  data() {
    return {
      hours: TimeManager.getHours(),
      minutes: TimeManager.getMinutes(),
      seconds: TimeManager.getSeconds(),
      isShowSetting: false,
    }
  },
  methods: {
    open() {
      this.hours = TimeManager.getHours()
      this.minutes = TimeManager.getMinutes()
      this.seconds = TimeManager.getSeconds()
      this.isShowSetting = true
    },
    save() {
      TimeManager.setHours(this.$refs['hours-slider'].lazyValue)
      TimeManager.setMinutes(this.$refs['minutes-slider'].lazyValue)
      TimeManager.setSeconds(this.$refs['seconds-slider'].lazyValue)

      this.isShowSetting = false
    },
    reset() {
      TimeManager.setNow()

      this.isShowSetting = false
    },
    randomize() {
      TimeManager.setHours(Math.round(Math.random() * 11))
      TimeManager.setMinutes(Math.round(Math.random() * 59))
      TimeManager.setSeconds(Math.round(Math.random() * 59))

      this.isShowSetting = false
    },
    cancel() {
      this.isShowSetting = false
    },
  }
}
</script>

<style lang="stylus" scoped>

.btn-open-modal
  position absolute
  right 20px
  top 20px
  z-index: 100
  font-size 24px

.btn-save
  font-size 24px

.v-list-item
  &__content
    padding 20px 30px
  &__title
    font-size 24px
    text-align center


</style>
