import {SpriteSheet} from '../sprite-sheet'
import {Player} from '../player'

export class GameLevel {
    constructor(game) {
        this.game = game
        this.tiles = new SpriteSheet('tiles', 640, 640)
        this.player = new Player(this.game.control)
        this.player.x = 100
        this.player.y = 100
    }

    init() {
        const mapData = require('../maps/world.json')
        this.map = this.game.screen.createMap('world', mapData, this.tiles)
        this.map.setXY(0, 0)
    }

    render(timestamp) {
        this.player.update(timestamp)
        this.game.screen.fill('black')
        this.game.screen.drawSprite(this.map)
        this.game.screen.drawSprite(this.player.view)
    }
}