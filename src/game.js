import {Screen} from './screen'
import {Control} from './control'
import {Menu} from './scenes/menu'
import {Level} from './scenes/level'

export class Game {
    constructor() {
        this.screen = new Screen(640, 640)
        this.control = new Control()
        this.scenes = {
            menu: new Menu(this),
            level: new Level(this)
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