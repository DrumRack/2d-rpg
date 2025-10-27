import {SpriteSheet} from '../sprite-sheet'

export class GameLevel {
    constructor(game) {
        this.game = game
        this.mapData = require('../maps/world.json')
        this.tiles = new SpriteSheet('tiles', 640, 640)
        this.animation = this.tiles.getAnimation([1, 2, 3, 4], 700, true, true)
        this.animation.setXY(20, 20)
    }

    init() {
        this.map = this.game.screen.createMap('world', this.mapData, this.tiles)
        this.map.setXY(0, 0)
    }

    render(timestamp) {
        this.animation.update(timestamp)
        this.game.screen.fill('black')
        this.game.screen.drawSprite(this.map)
        this.game.screen.drawSprite(this.animation)
    }
}