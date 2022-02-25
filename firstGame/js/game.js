                        // cirar nova cena
let gameScene = new Phaser.Scene('Game');
const WIDTH = 640 - 126;
const HEIGHT = 360;


                        // carrega assets jogo
gameScene.preload = function(){
    // carrega o background
    this.load.image('background', '../sprites/background.png');
    // carrega o player
    this.load.image('player', '../sprites/mr-man.png');
    // cerrega inimigo
    this.load.image('enemy', '../sprites/enemy.png');
    //carrega princesa
    this.load.image('princess', '../sprites/enemy.png');
}

                        // cria as imagens
gameScene.create = function(){
    // cria o background
    let bg = this.add.sprite(0,0, 'background');
    bg.setPosition(WIDTH / 2, HEIGHT / 2)
    // aumenta o tamanho da imagem de background
    bg.setScale(2);

    //cria o jogador
    this.player = this.add.sprite(0,0, 'player');
    this.player.setPosition(50, 80);
    this.player.setScale(2);
    console.log(this.player);
    // cria inimigo
    let enemy = this.add.sprite(0, 0, 'enemy');
    enemy.setPosition(200, 180);
    enemy.setScale(2);

    // cria princesa

}

// update

gameScene.update = function(){
    const playerH = this.player.scaleX;
    if(playerH < 4){
        this.player.scaleX += 0.01;
        this.player.scaleY += 0.01;
    }
    
    
    
};


// configura o game
let config = {
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    scene: gameScene
};


// cria o jogo passando a config

let game = new Phaser.Game(config);