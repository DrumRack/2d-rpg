import {Screen} from './screen'
import {ControlState} from './control-state'
import {Loading} from './scenes/loading'
import {Menu} from './scenes/menu'
import {GameLevel} from './scenes/game-level'

export class Game {
    constructor() {
        this.screen = new Screen(640, 640)
        this.screen.loadImages({
            title: 'images/title.png',
            tiles: 'images/tiles.png'
        })
        this.control = new ControlState()
        this.scenes = {
            loading: new Loading(this),
            menu: new Menu(this),
            level: new GameLevel(this)
        }
        this.currentScene = this.scenes.loading
    }

    frame(timestamp) {
        this.currentScene.render(timestamp)
        requestAnimationFrame(this.frame.bind(this))
    }

    run() {
        requestAnimationFrame(this.frame.bind(this))
    }
}