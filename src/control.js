export class Control {
    constructor () {
        this.up = false
        this.down = false
        this.left = false
        this.right = false
        this.enter = false
        this.keyMap = new Map([
            ['ArrowUp', 'up'],
            ['ArrowDown', 'down'],
            ['ArrowLeft', 'left'],
            ['ArrowRight', 'right'],
            ['Enter', 'enter'],
            ['KeyW', 'up'],
            ['KeyS', 'down'],
            ['KeyA', 'left'],
            ['KeyD', 'right'],
            ['Space', 'enter']
        ])
        
        document.onkeydown = event => this.update(event, true)
        document.onkeyup = event => this.update(event, false)
    }

    update(event, pressed) {
        if (this.keyMap.has(event.code)) {
            this[this.keyMap.get(event.code)] = pressed
        }
    }
}