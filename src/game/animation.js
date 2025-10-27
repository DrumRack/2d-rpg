import {Sprite} from './sprite'

export class Animation extends Sprite {
    constructor(imageName, frames, speed, repeat, autorun, width, height) {
        super(imageName, frames[0].sourceX, frames[0].sourceY, width, height)

        this.frames = frames
        this.speed = speed
        this.repeat = repeat
        this.running = autorun
        this.totalFrames = frames.length
    }

    lastTimestamp = 0
    currentFrame = 0

    update(timestamp) {
        if (!this.running) return
        if (timestamp - this.lastTimestamp > this.speed) {
            this.nextFrame()
            this.lastTimestamp += this.speed
        }
    }

    nextFrame() {
        if (this.currentFrame + 1 === this.totalFrames) {
            if (this.repeat) {
                this.setFrame(0)
                return
            }
            this.stop()
            return
        }
        this.setFrame(this.currentFrame + 1)
    }

    setFrame(index) {
        this.currentFrame = index
        this.sourceX = this.frames[index].sourceX
        this.sourceY = this.frames[index].sourceY
    }

    start() {
        this.setFrame(0)
        this.running = true
    }

    stop() {
        this.running = false
    }
}