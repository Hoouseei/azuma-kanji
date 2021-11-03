import * as PIXI from 'pixi.js-legacy'

class Item extends PIXI.Sprite {
  constructor(name, stage=false) {
    super()

    this.texture = new PIXI.Texture.from(name)
    this.anchor.set(0.5)
    const n = name.replace('@2x', '').slice(0, -4).split('-')
    const x = parseFloat(n[0]) + (this.width/2)
    const y = parseFloat(n[1]) + (this.height/2)
    this.x = this._origX = x
    this.y = this._origY = y

    this.name = n[4] ? n[4] : name
    if(stage) stage.addChild(this)
  }
}

export default Item
