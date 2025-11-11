import {CharacterSheet} from './character-sheet'

export class Player {
    lastTimestamp;
    x = 0
    y = 0
    speed = 70

    constructor(control) {
        this.control = control
        this.animations = {}
        this.animationsSheet = new CharacterSheet('player', 576, 256);
        ['walk_up', 'walk_down', 'walk_left', 'walk_right'].forEach(name => {
            this.animations[name] = this.animationsSheet.getAnimation(name, 200, true, true)
        })
        this.view = this.animations['walk_down']
    }

    update(timestamp) {
        if (this.control.up) {
            this.view = this.animations['walk_up']
            this.y += (timestamp - this.lastTimestamp) * (-this.speed / 1000)
            this.view.start()
        }
        else if (this.control.down) {
            this.view = this.animations['walk_down']
            this.y += (timestamp - this.lastTimestamp) * (this.speed / 1000)
            this.view.start()
        }
        else if (this.control.left) {
            this.view = this.animations['walk_left']
            this.x += (timestamp - this.lastTimestamp) * (-this.speed / 1000)
            this.view.start()
        }
        else if (this.control.right) {
            this.view = this.animations['walk_right']
            this.x += (timestamp - this.lastTimestamp) * (this.speed / 1000)
            this.view.start()
        } else {
            this.view.stop()
        }

        this.view.setXY(Math.trunc(this.x), Math.trunc(this.y))
        this.lastTimestamp = timestamp
        this.view.update(timestamp)
    }
}