export class Level {
    constructor(game) {
        this.game = game
    }

    render() {
        this.game.screen.drawImage(64, 64)
        this.game.screen.drawImage(0, 0)
        this.game.screen.drawImage(0, 64)
    }
}