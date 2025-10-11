export class Screen {
    constructor (width, height) {
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.width = width
        this.canvas.height = height

        document.body.prepend(this.canvas)
    }
}