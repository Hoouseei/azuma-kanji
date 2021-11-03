import * as PIXI from 'pixi.js-legacy'

import LevelManager from './level-manager.js'

export default class Hand extends PIXI.Sprite {
  constructor(config) {
    super()

    this.angle = 0
    this.config = config
    this.defaultColor = config.defaultColor;
    this.activeColor = config.activeColor;
  }

  init(resource) {
    this.texture = resource.texture

    this.pivot = new PIXI.Point(this.width/2, this.height)
  }

  move(pos) {
    this.angle = pos*360

    this.tint = LevelManager.levelStatus.isTintHands ? this.activeColor : this.defaultColor
  }
}
