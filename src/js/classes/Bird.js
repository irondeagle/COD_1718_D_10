import GameObject from './GameObject.js';

export default class Bird extends GameObject{
  constructor(x, y, image){
    super(x, y, image);
    this.frameRate = 20;
    this.numFrames = 5;
    this.killed = false;
  }

}
