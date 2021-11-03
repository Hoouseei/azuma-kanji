const instance = (function() {
class TimeManager {
  constructor() {
    this.date = new Date()
    this.elapced = this.date.getTime()
    this.update()
  }

  update = () => {
    requestAnimationFrame(this.update)
    const now = Date.now()
    this.date.setTime(this.date.getTime() + (now - this.elapced))
    this.elapced = now
  }

  setNow(time=Date.now()) {
    this.date.setTime(time)
  }

  getNow() {
    return this.date.getTime()
  }

  getHours(is24Disp=false) {
    return this.date.getHours() % (is24Disp ? 24 : 12)
  }

  getHourPosition() {
    return this.getMinutes()/60
  }

  setHours(hours) {
    this.date.setHours(hours)
  }

  getMinutes() {
    return this.date.getMinutes()
  }

  getMinutePosition() {
    return this.getSeconds()/60
  }

  setMinutes(minutes) {
    this.date.setMinutes(minutes)
  }

  getSeconds() {
    return this.date.getSeconds()
  }

  getSecondPosition() {
    return (this.getNow()/(1000)%60) - this.getSeconds()
  }

  setSeconds(seconds) {
    this.date.setSeconds(seconds)
  }

}
return new TimeManager
})()

export default instance
