const instance = (function() {
  class LevelManager {
    constructor() {
      this.levelLength = 3
      this.levelSettings = {
        isShowMinuteDots: 1,
        isTintDots: 0,
        isTintNums: 0,
        isTintHands: 0,
        isShowMinuteNumbers: 0,
        isShowHourNumbers: 1,
        isShowText: 0,
      }
      this.levelStatus = {}
      this.setLevel(0)
    }

    getLevelLength() {
      return this.levelLength
    }

    getLevel() {
      return this.level
    }

    setLevel(level) {
      this.level = level
      for (const key in this.levelSettings) {
        this.levelStatus[key] = this.levelSettings[key] >= this.level
      }
    }
  }
  return new LevelManager
  })()

  export default instance
