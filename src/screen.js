export class Screen {
    constructor (width, height) {
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.width = width
        this.canvas.height = height
        this.tileset = new Image()
        this.tileset.src = 'resources/tileset.png'

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

    drawImage() {
        this.context.drawImage(this.tileset, 0, 0, 64, 64, 0, 0, 64, 64)
    }
}