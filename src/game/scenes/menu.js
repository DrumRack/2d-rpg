export class Menu {
    constructor(game) {
        this.game = game
        this.nextScene = 'level'
    }

    render() {
        if (this.game.control.enter) {
            this.game.currentScene = this.game.scenes[this.nextScene]
            this.game.currentScene.init()
        }
        this.game.screen.fill('black')
        this.game.screen.drawImage('title', 20, 0)
        this.game.screen.print('Нажмите пробел для начала игры', 120, 500)
    }
}