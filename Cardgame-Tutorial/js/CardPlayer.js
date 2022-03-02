import CardDraggable from "./CardDraggable.js";

export default class CardPlayer extends CardDraggable {
    constructor(data){
        let { health } = data;
        super(data);
        // textos de vida e armadura
        this.textHealth = new Phaser.GameObjects.BitmapText(this.scene, 0, 0, 'pressStart', health);
        this.textHealth.tint = 0;

        this.textMaxHealth = new Phaser.GameObjects.BitmapText(this.scene, 0, 0, 'pressStart', health, 12);
        this.textMaxHealth.tint = 0;

        this.textArmor = new Phaser.GameObjects.BitmapText(this.scene, 0, 0, 'pressStart' );
        this.spriteArmor = new Phaser.GameObjects.Sprite(this.scene, 50, -80, 'Shield');
        
        // adiciona na cena os recursos criados acima
        this.add([ this.textHealth, this.textMaxHealth, this.textArmor, this.spriteArmor ])


        this.health = health;
        this.maxHealth = health;
        this.armor = 0;
    };

    set health(newHealth){
        this._health = newHealth;
        this.textHealth = this._health;
        // this.textHealth.x = -44 - this.textHealth.width / 2;
    };

    get health(){
        return this._health;
    };

    set maxHealth(newMaxHealth){
        this._maxHealth = newMaxHealth;
    };

    get maxHealth(){
        return this._maxHealth;
    };

    set armor(newArmor){
        this._armor = newArmor;
        this.textArmor.text = this.armor;
        this.textArmor.x = 46 - this.textArmor.width / 2;
        this.textArmor.alpha = this._armor === 0 ? 0 : 1;
        this.spriteArmor.alpha = this._armor === 0 ? 0 : 1;
    };

    get armor(){
        return this._armor;
    };
};