import {Screen} from './screen'

export class Game {
    constructor () {
        this.screen = new Screen(640, 640)
    }

    frame() {
        requestAnimationFrame(this.frame.bind(this))
    }

    run() {
        requestAnimationFrame(this.frame.bind(this))
    }
}