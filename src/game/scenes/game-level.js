import {SpriteSheet} from '../sprite-sheet'
import {CharacterSheet} from '../character-sheet'

export class GameLevel {
    constructor(game) {
        this.game = game
        this.mapData = require('../maps/world.json')
        this.tiles = new SpriteSheet('tiles', 640, 640)
        this.playerTiles = new CharacterSheet('player', 576, 256)
        this.player = this.playerTiles.getAnimation('walk_left', 200, true, true)
        this.player.setXY(0, 0)
    }

    init() {
        this.map = this.game.screen.createMap('world', this.mapData, this.tiles)
        this.map.setXY(0, 0)
    }

    render(timestamp) {
        this.player.update(timestamp)
        this.game.screen.fill('black')
        this.game.screen.drawSprite(this.map)
        this.game.screen.drawSprite(this.player)
    }
}