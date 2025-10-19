import {SpriteSheet} from '../sprite-sheet'

export class GameLevel {
    constructor(game) {
        this.game = game
        this.dataMap = require('../maps/level-1.json')
        this.tiles = new SpriteSheet(this.game.screen.tiles, 640, 640)
    }

    init() {
        this.map = this.game.screen.createMap(this.dataMap, this.tiles)
        this.map.setXY(0, 0)
    }

    render() {
        this.game.screen.fill('black')
        this.game.screen.drawSprite(this.map)
    }
}