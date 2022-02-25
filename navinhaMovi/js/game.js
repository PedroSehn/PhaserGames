// const Phaser = require("phaser");

let gameScene = new Phaser.Scene('Game');

const screenW = 360 - 89;
const screenH = 360;

gameScene.preload = function() {
    
    this.load.atlas('background','../assets/space-bg.png', '../assets/space-bg.json');
    this.load.atlas('ship','../assets/ship-sprites.png','../assets/ship-sprites.json');
};

gameScene.create = function(){
  let bg =  this.add.image(0,0, 'background', 'space-bg-1');
  bg.setPosition(screenW / 2, screenH / 2 );
  bg.setScale(2);

  //

  this.player = this.add.sprite(0, 0, 'ship', 'ship02');
  this.player.setPosition(screenW / 2, screenH / 2);
  this.player.setScale(3);

  A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
};

gameScene.update = function(){
    //console.log(this.player);
    if (Phaser.Input.Keyboard.JustDown(A)){
        this.player.x  = this.player.x - 2;
    }
    
    if(Phaser.Input.Keyboard.JustDown(D)){
        this.player.x  = this.player.x + 2;
    }
};

let config = {
    type: Phaser.AUTO,
    width: screenW,
    height: screenH,
    scene: gameScene,
};

let game = new Phaser.Game(config);