import {SpriteSheet} from '../sprite-sheet'

export class GameLevel {
    constructor(game) {
        this.game = game
        this.tiles = new SpriteSheet(this.game.screen.tiles, 640, 640)
        this.grass = this.tiles.getSprite(1)
    }

    render() {
        this.grass.setXY(0, 0)
        this.game.screen.drawSprite(this.grass)
    }
}