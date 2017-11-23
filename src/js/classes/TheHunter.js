import GameState from './states/GameState.js';

export default class TheHunter extends Phaser.Game {
  constructor() {
    super(400, 400, Phaser.AUTO, `content`);
    this.state.add('Game', GameState);
    this.state.start('Game');
  }
};
