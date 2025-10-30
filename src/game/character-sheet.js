import {SpriteSheet} from './sprite-sheet'

export class CharacterSheet extends SpriteSheet {
    constructor(imageName, imageWidth, imageHeight) {
        super(imageName, imageWidth, imageHeight)
        this.sequences = this.getSequences()
    }

    getSequences() {
        const data = require('./maps/animations.json')
        const sequences = {}
        data.layers.forEach(layer => {
            sequences[layer.name] = layer.data
        })
        return sequences
    }

    getAnimation(name, speed, repeat, autorun) {
        return super.getAnimation(this.sequences[name], speed, repeat, autorun)
    }
}