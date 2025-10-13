export class Sprite {
    constructor(image, sourceX, sourceY, width = 64, height = 64) {
        this.image = image
        this.sourceX = sourceX
        this.sourceY = sourceY
        this.width = width
        this.height = height
    }

    setXY(x, y) {
        this.x = x
        this.y = y
    }
}