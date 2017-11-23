import GameState from './states/GameState';

export default class TheHunter extends Phaser.TheHunter {
  constructor() {
    super(400, 400, Phaser.AUTO, `content`);
    this.state.add('TheHunter', GameState);
    this.state.start('TheHunter');
  }
};
