<template>
  <div class="info-wrapper">
    <TimePie :time="hours" :position="hourPosition" unit="じ" color="#c82209"></TimePie>
    <TimePie :time="minutes" :position="minutePosition" unit="ふん" color="#1fb8de"></TimePie>
    <TimePie :time="seconds" :position="secondPosition" unit="びょう" color="#55b032"></TimePie>
  </div>
</template>


<script>
import TimeManager from '~/assets/scripts/time-manager'
export default {
  mounted() {
    this.update()
  },
  data() {
    return {
      hours: TimeManager.getHours(),
      minutes: TimeManager.getMinutes(),
      seconds: TimeManager.getSeconds(),
      hourPosition: TimeManager.getHourPosition(),
      minutePosition: TimeManager.getMinutePosition(),
      secondPosition: TimeManager.getSecondPosition(),
    }
  },
  methods: {
    update() {
      requestAnimationFrame(this.update)
      this.hours = TimeManager.getHours()
      this.minutes = TimeManager.getMinutes()
      this.seconds = TimeManager.getSeconds()
      this.hourPosition = TimeManager.getHourPosition()
      this.minutePosition = TimeManager.getMinutePosition()
      this.secondPosition = TimeManager.getSecondPosition()
    }
  }
}
</script>

<style lang="stylus" scoped>
.info-wrapper
  position absolute
  left calc(50% + 400px)
  top 50%
  z-index: 100
  font-family: 'AXIS Std'
  font-size 30px
  font-weight bold
  line-height 1
  text-align right
  transform: translateY(-50%)
.hours
  color #c82209
.minutes
  color #1fb8de
.seconds
  color #55b032
</style>
