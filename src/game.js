import {Screen} from './screen'
import {ControlState} from './control-state'
import {Menu} from './scenes/menu'
import {GameLevel} from './scenes/game-level'

export class Game {
    constructor() {
        this.screen = new Screen(640, 640)
        this.control = new ControlState()
        this.scenes = {
            menu: new Menu(this),
            level: new GameLevel(this)
        }
        this.currentScene = this.scenes.level
    }

    frame() {
        this.currentScene.render()
        requestAnimationFrame(this.frame.bind(this))
    }

    run() {
        requestAnimationFrame(this.frame.bind(this))
    }
}