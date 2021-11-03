import * as PIXI from 'pixi.js-legacy'

import LevelManager from './level-manager.js'
import TimeManager from './time-manager'

import Hand from './hand'
import Face from './face'

export default class Clock {
  constructor(el, canvas) {
    window.TimeManager = TimeManager
    window.LevelManager = LevelManager
    this.app = new PIXI.Application({
      width: 1280,
      height: 800,
      view: canvas,
      backgroundColor: 0xd4dad4,
      forceCanvas: true,
    })

    this.wrapper = new PIXI.Container

    this.face = new Face({
      defaultColor: 0x0b3341,
      hours: {width: 10, height: 40, dotRadius: 296, numRadius: 220, activeColor: 0xc82209},
      minutes: {width: 10, height: 20, dotRadius: 296, numRadius: 226, activeColor: 0x1fb8de}
    })

    this.hourHand = new Hand({
      defaultColor: 0x0b3341,
      activeColor: 0xc82209
    })
    this.app.stage.addChild(this.hourHand)

    this.minuteHand = new Hand({
      defaultColor: 0x0b3341,
      activeColor: 0x1fb8de
    })
    this.app.stage.addChild(this.minuteHand)

    this.secondHand = new Hand({
      defaultColor: 0x8aa0ac,
      activeColor: 0x55b032
    })

    if(!this.isLoaded) {
      this.app.loader.add([
        {name: "hdots", url: 'hdots/data.json'},
        {name: "hnums", url: 'hnums/data.json'},
        {name: "mdots", url: 'mdots/data.json'},
        {name: "mnums", url: 'mnums/data.json'},
        {name: "hand-hour", url: 'hands/hand-hour.png'},
        {name: "hand-minute", url: 'hands/hand-minute.png'},
        {name: "hand-second", url: 'hands/hand-second.png'},
      ])
      this.app.loader.load(this.onLoad)
    } else {
      this.onLoad()
    }
  }

  onLoad = () => {
    this.isLoaded = true

    this.face.init(this.app.loader.resources, this.app.stage)
    this.wrapper.addChild(this.face)

    this.hourHand.init(this.app.loader.resources["hand-hour"])
    this.wrapper.addChild(this.hourHand)
    this.hourHand.x = (this.face.base.width/2) - 10
    this.hourHand.y = (this.face.base.height/2) - 0

    this.minuteHand.init(this.app.loader.resources["hand-minute"])
    this.wrapper.addChild(this.minuteHand)
    this.minuteHand.x = (this.face.base.width/2) - 10
    this.minuteHand.y = (this.face.base.height/2) - 0

    this.secondHand.init(this.app.loader.resources["hand-second"])
    this.wrapper.addChild(this.secondHand)
    this.secondHand.x = (this.face.base.width/2) - 10
    this.secondHand.y = (this.face.base.height/2) - 0

    this.app.stage.addChild(this.wrapper)
    this.wrapper.x = (this.app.view.width - this.wrapper.width) / 2
    this.wrapper.y = (this.app.view.height - this.wrapper.height) / 2 - 30

    this.app.ticker.add(this.update)
  }

  update = (delta) => {

    this.hourHand.move((TimeManager.getHours()/12) + TimeManager.getHourPosition()/12)
    // this.minuteHand.move((TimeManager.getMinutes()/60) + TimeManager.getMinutePosition()/100)
    this.minuteHand.move(TimeManager.getMinutes()/60 + TimeManager.getMinutePosition()/60)
    this.secondHand.move((TimeManager.getSeconds()/60))

    this.face.setLevel(LevelManager.getLevel())
    this.face.update(TimeManager.getHours(), TimeManager.getMinutes(), TimeManager.getSeconds())
  }

}
