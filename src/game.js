import {Screen} from './screen'
import {Menu} from './scenes/menu'

export class Game {
    constructor () {
        this.screen = new Screen(640, 640)
        this.scene = new Menu(this)
    }

    frame() {
        this.scene.render()
        requestAnimationFrame(this.frame.bind(this))
    }

    run() {
        requestAnimationFrame(this.frame.bind(this))
    }
}