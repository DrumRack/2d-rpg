export class Menu {
    constructor(game) {
        this.game = game
    }

    render() {
        this.game.screen.fill('black')
        this.game.screen.print('2D-RPG', 280, 200)
    }
}