export class Screen {
    constructor(width, height) {
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.width = width
        this.canvas.height = height
        
        this.tiles = new Image()
        this.tiles.src = 'images/tiles.png'
        this.isTilesLoaded = false
        this.tiles.onload = () => {
            this.isTilesLoaded = true
        }

        document.body.prepend(this.canvas)
    }

    fill(color) {
        this.context.fillStyle = color
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    print(text, x, y) {
        this.context.fillStyle = 'white'
        this.context.font = '26px Segoe UI'
        this.context.fillText(text, x, y)
    }

    drawSprite(sprite) {
        this.context.drawImage(sprite.image, sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height)
    }
}