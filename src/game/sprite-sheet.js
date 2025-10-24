import {Sprite} from './sprite'

export class SpriteSheet {
    constructor(image, imageWidth, imageHeight, spriteWidth = 64, spriteHeight = 64) {
        this.image = image
        this.imageWidth = imageWidth
        this.imageHeight = imageHeight
        this.spriteWidth = spriteWidth
        this.spriteHeight = spriteHeight
    }

    getSourceX(index) {
        return (--index * this.spriteWidth) % this.imageWidth
    }

    getSourceY(index) {
        return Math.trunc((--index * this.spriteWidth) / this.imageWidth) * this.spriteHeight
    }

    getSprite(index) {
        return new Sprite(this.image, this.getSourceX(index), this.getSourceY(index), this.spriteWidth, this.spriteHeight)
    }
}