import {Sprite} from './sprite'

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

    createMap(dataMap, tileset) {
        const mapImage = document.createElement('canvas')
        const mapContext = mapImage.getContext('2d')
        mapImage.width = 1280
        mapImage.height = 1280
        let col = 0, row = 0
        dataMap.data.forEach(index => {
            mapContext.drawImage(tileset.image, tileset.getSourceX(index), tileset.getSourceY(index), 64, 64, col * 64, row * 64, 64, 64)
            col++
            if (col > 19) {
                col = 0
                row++
            }
        })

        return new Sprite(mapImage, 0, 0, 1280, 1280)
    }

    drawSprite(sprite) {
        this.context.drawImage(sprite.image, sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height)
    }
}