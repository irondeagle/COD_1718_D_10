export default class Keyboard {
  constructor (){
    this.keys = {};
    window.addEventListener(`keydown` , event => this.handleKeyDown(event));
    window.addEventListener( `keyup` , event => this.handleKeyUp(event));
    Keyboard.UP  = 38;
    Keyboard.DOWN = 40;
    Keyboard.SPACE = 32;
    Keyboard.R = 82;
    }
    handleKeyDown(event){
      this.keys[event.keyCode] = true ;
    }
    handleKeyUp(event){
      delete this.keys[event.keyCode];
    }
     isDown (keyCode){
       return this.keys[keyCode];
    }

}
