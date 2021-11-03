import * as PIXI from 'pixi.js-legacy'

import LevelManager from './level-manager.js'
import Item from './item.js'

export default class Face extends PIXI.Container {
  constructor(configs) {
    super()

    this.configs = configs

    this.radius = 325
    this.defaultColor = configs.defaultColor
    this.hourConfig = configs.hours
    this.minuteConfig = configs.minutes

    this.base = new PIXI.Graphics

    this.hours = new PIXI.Container
    this.hourNums = new PIXI.Container
    this.minutes = new PIXI.Container
    this.minuteNums = new PIXI.Container

  }

  update( hours, minutes, seconds) {

    this.tintMDot.tint = this.configs.defaultColor
    this.tintMNum.tint = this.configs.defaultColor
    this.tintHNum.tint = this.configs.defaultColor
    this.tintHDot.tint = this.configs.defaultColor

    this.minutes.visible = LevelManager.levelStatus.isShowMinuteDots
    this.minuteNums.visible = LevelManager.levelStatus.isShowMinuteNumbers
    this.hourNums.visible = LevelManager.levelStatus.isShowHourNumbers

    const hi = (hours%12)-1 < 0 ? this.hdots.length - 1 : (hours%12)-1
    const mi = (minutes%60)-1 < 0 ? this.mdots.length - 1 : (minutes%60)-1
    if(LevelManager.levelStatus.isTintDots) {
      this.tintHDot = this.hdots[hi]
      this.tintMDot = this.mdots[mi]
      this.tintHDot.tint = this.configs.hours.activeColor
      this.tintMDot.tint = this.configs.minutes.activeColor
    }

    if(LevelManager.levelStatus.isTintNums) {
      this.tintHNum = this.hnums[hi]
      this.tintMNum = this.mnums[mi]
      this.tintHNum.tint = this.configs.hours.activeColor
      this.tintMNum.tint = this.configs.minutes.activeColor
    }
  }

  setLevel(level) {
    return
  }

  init(resources, stage) {
    this.initBase()
    this.initHours(resources.hdots.data.frames, resources.hnums.data.frames)
    this.initMinutes(resources.mdots.data.frames, resources.mnums.data.frames)

    this.addChild(this.hours)
    this.addChild(this.hourNums)
    this.addChild(this.minutes)
    this.addChild(this.minuteNums)

    stage.addChild(this)
  }

  initBase() {
    this.base.beginFill(0xffffff)
    this.base.lineStyle(20, this.defaultColor)
    this.base.drawCircle(this.radius + 20, this.radius + 20, this.radius + 15)
    this.base.endFill()

    this.addChild(this.base)
  }

  initFaces(frames, arrays, wrapper) {
    const keys  = Object.keys(frames)
    for(const key of keys) {
      const item       = new Item(key)
      item.tint = this.defaultColor
      const num = parseInt(item.name.split('_')[1], 10)
      arrays[num] = item
      wrapper.addChild(item)
    }
  }

  initHours(dotFrames, numFrames) {
    const hdotKeys  = Object.keys(dotFrames)
    this.hdots = []
    for(const key of hdotKeys) {
      const item       = new Item(key)
      item.tint = this.defaultColor
      const num = parseInt(item.name.split('_')[1], 10)
      this.hdots[num] = item
      this.hours.addChild(item)
    }

    const hnumKeys  = Object.keys(numFrames)
    this.hnums = []
    for(const key of hnumKeys) {
      const item       = new Item(key)
      item.tint = this.defaultColor
      const num = parseInt(item.name.split('_')[1], 10)
      this.hnums[num] = item
      this.hourNums.addChild(item)
    }

    this.tintHDot = this.hdots[0]
    this.tintHNum = this.hnums[0]
  }

  initMinutes(dotFrames, numFrames) {
    const mdotKeys  = Object.keys(dotFrames)
    this.mdots = []
    for(const key of mdotKeys) {
      const item       = new Item(key)
      item.tint = this.defaultColor
      const num = parseInt(item.name.split('_')[1], 10)
      this.mdots[num] = item
      this.minutes.addChild(item)
    }

    const mnumKeys  = Object.keys(numFrames)
    this.mnums = []
    for(const key of mnumKeys) {
      const item       = new Item(key)
      item.tint = this.defaultColor
      const num = parseInt(item.name.split('_')[1], 10)
      this.mnums[num] = item
      this.minuteNums.addChild(item)
    }

    this.tintMDot = this.mdots[0]
    this.tintMNum = this.mnums[0]
  }

}
