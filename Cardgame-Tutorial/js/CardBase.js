export default class CardBase extends Phaser.GameObjects.Container {
    constructor(data) {
        let { scene, x, y, card, image, depth, name } = data;
        let spriteCard = new Phaser.GameObjects.Sprite(scene, 0, 0, card);
        let spriteImage = new Phaser.GameObjects.Sprite(scene, 15, -5 , image);
        let textName = new Phaser.GameObjects.BitmapText(scene, -15, 95, 'pressStart', name, 18, Phaser.GameObjects.BitmapText.ALIGN_CENTER);
        
        super(scene, x, y, [ spriteCard, spriteImage, textName ]);
        
        this.spriteCard = spriteCard;
        this.spriteImage = spriteImage;
        this.textName = textName;

        this.cardName = name;
        this.depth = depth;
        this.scene = scene;
        
        this.scene.add.existing(this);
    };

    set cardName(newName) {
        this._cardName = newName;
        this.textName.text = this._cardName;
        
        // diz que a largura maxima seja igual a largura da carta
        this.textName.maxWidth = this.spriteCard.width;
        
        // seta cor do texto para preto
        this.textName.tint = 0;

        this.textName.x = -this.textName.width / 2;
        this.textName.y = 120 - this.textName.height;
    };

};