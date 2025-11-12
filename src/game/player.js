import {Vector} from './vector'
import {CharacterSheet} from './character-sheet'

export class Player {
    lastTimestamp;
    x = 0
    y = 0
    speed = 70
    velocity = new Vector('down', 0)
    animationsSheet = new CharacterSheet('player', 576, 256)
    animations = {}

    constructor(control) {
        this.control = control;
        ['walk_up', 'walk_down', 'walk_left', 'walk_right'].forEach(name => {
            this.animations[name] = this.animationsSheet.getAnimation(name, 250, true, true)
        })
        this.#stand('down')
    }

    update(timestamp) {
        if (!this.lastTimestamp) this.lastTimestamp = timestamp

        if (this.control.up) this.#walk('up')
        else if (this.control.down) this.#walk('down')
        else if (this.control.left) this.#walk('left')
        else if (this.control.right) this.#walk('right')
        else this.#stand(this.velocity.direction)

        this.x += (timestamp - this.lastTimestamp) * (this.velocity.x / 1000)
        this.y += (timestamp - this.lastTimestamp) * (this.velocity.y / 1000)
        this.view.setXY(Math.trunc(this.x), Math.trunc(this.y))
        this.lastTimestamp = timestamp
        this.view.update(timestamp)
    }

    #walk(direction) {
        this.velocity.setDirection(direction, this.speed)
        this.view = this.animations['walk_' + direction]
        this.view.start()
    }

    #stand(direction) {
        this.velocity.setDirection(direction, 0)
        this.view = this.animations['walk_' + direction]
        this.view.stop()
    }
}