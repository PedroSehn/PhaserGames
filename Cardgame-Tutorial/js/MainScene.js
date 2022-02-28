import CardBase from './CardBase.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        // cards 
        this.load.image('Player-Card', '../assets/Player-Card.png');
        this.load.image('Enemy-Card', '../assets/Enemy-Card.png');
        this.load.image('Item-Card', '../assets/Item-Card.png');
        
        // sprites
        this.load.image('Genius', '../assets/Genius.png');
        this.load.image('Ghost', '../assets/Ghost.png');
        this.load.image('Lamia', '../assets/Lamia.png');
        this.load.image('Skeleton', '../assets/Skeleton.png');
        this.load.image('Skeleton-Warrior', '../assets/Skeletonwarrior.png');
        this.load.image('Zombie', '../assets/Zombie.png');
        this.load.image('Hero', '../assets/Hero.png');

        // icons
        this.load.image('Potion', '../assets/Potion-Icon.png');
        this.load.image('Shield', '../assets/Shield-Icon.png');
        this.load.image('Player-Armor', '../assets/Armor-Icon.png');
        this.load.image('Death', '../assets/Death-Icon.png');

        //this.load.bitMapFont('')
    };

    create() {
        this.player = new CardBase({
            scene: this,
            name: 'Hero',
            x: 0,
            y: 0,
            card: 'Player-Card',
            image: 'Hero',
            depth: 1,
        });
    };
};