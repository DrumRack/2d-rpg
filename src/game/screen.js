import {ImageLoader} from './image-loader'
import {Sprite} from './sprite'

export class Screen {
    constructor(width, height) {
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.width = width
        this.canvas.height = height

        document.body.prepend(this.canvas)
    }

    loadImages(imageFiles) {
        const loader = new ImageLoader(imageFiles)
        loader.load().then(() => {
            this.images = loader.images
            this.isImagesLoaded = true
        })
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

    drawImage(imageName, x, y) {
        this.context.drawImage(this.images[imageName], x, y)
    }

    drawSprite(sprite) {
        this.context.drawImage(this.images[sprite.imageName], sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height)
    }

    createMap(name, mapData, tileset) {
        const mapImage = document.createElement('canvas')
        const mapContext = mapImage.getContext('2d')
        mapImage.width = mapData.width * mapData.tileWidth
        mapImage.height = mapData.height * mapData.tileHeight

        mapData.layers.forEach(layer => {
            let col = 0, row = 0
            layer.data.forEach(index => {
                mapContext.drawImage(this.images[tileset.imageName], tileset.getSourceX(index), tileset.getSourceY(index), mapData.tileWidth, mapData.tileHeight, col * mapData.tileWidth, row * mapData.tileHeight, mapData.tileWidth, mapData.tileHeight)
                col++
                if (col === mapData.width) {
                    col = 0
                    row++
                }
            })
        })
        this.images[name] = mapImage

        return new Sprite(name, 0, 0, mapImage.width, mapImage.height)
    }
}