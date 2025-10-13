import {Sprite} from './sprite'

export class SpriteSheet {
    constructor(image, imageWidth, imageHeight, spriteWidth = 64, spriteHeight = 64) {
        this.image = image
        this.imageWidth = imageWidth
        this.imageHeight = imageHeight
        this.spriteWidth = spriteWidth
        this.spriteHeight = spriteHeight
    }

    getSprite(index) {
        const sourceX = (--index * this.spriteWidth) % this.imageWidth
        const sourceY = Math.trunc((--index * this.spriteWidth) / this.imageWidth) * this.spriteHeight
        
        return new Sprite(this.image, sourceX, sourceY, this.spriteWidth, this.spriteHeight)
    }
}