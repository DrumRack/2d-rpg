import {SpriteSheet} from '../sprite-sheet'

export class GameLevel {
    constructor(game) {
        this.game = game
        this.mapData = require('../maps/world.json')
        this.tiles = new SpriteSheet(this.game.screen.tiles, 640, 640)
    }

    init() {
        this.map = this.game.screen.createMap(this.mapData, this.tiles)
        this.map.setXY(0, 0)
    }

    render() {
        this.game.screen.fill('black')
        this.game.screen.drawSprite(this.map)
    }
}