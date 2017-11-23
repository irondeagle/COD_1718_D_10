const SPEED = 1;

export default class GameState extends Phaser.State {
  init() {
    console.log(`init`);
    // this.cursors = this.input.keyboard.createCursorKeys();
    // this.otherKeys = this.input.keyboard.addKeys({
    //   'jump': Phaser.Keyboard.SPACEBAR,
    //   'shoot': Phaser.Keyboard.A
    // });
  }
  preload() {
    console.log(`preload`);
    this.load.image(`star`, `assets/star.png`);
    this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  }
  create() {
    console.log(`create`);
    this.player = this.add.sprite(this.game.width / 2, this.game.height / 2, 'dude');
    this.player.anchor.setTo(0.5, 0.5);

    // this.otherKeys.shoot.onDown.add(key => {
    //   console.log('shoot down');
    //   console.log(key);
    // });
    // this.otherKeys.shoot.onUp.add(key => {
    //   console.log(`shoot up, was down for ${key.duration}ms`);
    // });
    //
    // this.input.onDown.add(pointer => {
    //   this.add.sprite(pointer.x, pointer.y, 'star');
    // });
    // this.input.onUp.add(pointer => {
    //   console.log(`pointer up, was down for ${pointer.duration}ms`);
    // });
  }
  update() {
    // if (this.cursors.left.isDown) {
    //   this.player.x += -SPEED;
    // } else if (this.cursors.right.isDown) {
    //   this.player.x += SPEED;
    // }
    //
    // if (this.cursors.up.isDown) {
    //   this.player.y += -SPEED;
    // } else if (this.cursors.down.isDown) {
    //   this.player.y += SPEED;
    // }
    //
    // if (this.otherKeys.jump.isDown) {
    //   this.player.angle += 1;
    // }
    //
    // if (this.input.activePointer.isDown) {
    //   this.player.alpha = 0.5;
    // } else {
    //   this.player.alpha = 1;
    // }
  }
  render() {
  }
}
