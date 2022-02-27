import MainScene from './MainScene.js';

const SCREEN_W = 640;
const SCREEN_H = 1024;

const config = {
    width: SCREEN_W,
    height: SCREEN_H,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: "phaser-game",
    scene: [],
};

new Phaser.Game(config);