import {Sprite} from '../sprite'

export class Level {
    constructor(game) {
        this.game = game
        this.grass = new Sprite(this.game.screen.tileset, 0, 0)
        this.grass.setXY(50, 80)
    }

    render() {
        this.game.screen.drawSprite(this.grass)
    }
}