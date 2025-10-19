export class Loading {
    constructor(game) {
        this.game = game
        this.nextScene = 'menu'
    }

    render() {
        if (this.game.screen.isTilesLoaded) {
            this.game.currentScene = this.game.scenes[this.nextScene]
        }
        this.game.screen.fill('black')
        this.game.screen.print('Загрузка...', 50, 70)
    }
}