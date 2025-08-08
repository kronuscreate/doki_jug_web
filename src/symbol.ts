import { BlendModes } from "phaser";
import { SYMBOL_HEIGHT, SymbolName } from "./constant";

class Symbol extends Phaser.GameObjects.Container {
    private backImage: Phaser.GameObjects.Image | null = null;
    private frontImage: Phaser.GameObjects.Image | null = null;
    private blurImage: Phaser.GameObjects.Image | null = null;

    constructor(scene: Phaser.Scene, symbol: SymbolName) {
        super(scene);
        this.create(symbol);
    }

    create(symbolName: SymbolName): void {
        this.backImage = new Phaser.GameObjects.Image(this.scene, 0, 0, symbolName + "_back").setOrigin(0, 0);
        this.frontImage = new Phaser.GameObjects.Image(this.scene, 0, 0, symbolName + "_front").setOrigin(0, 0);
        this.blurImage = new Phaser.GameObjects.Image(this.scene, 0, 0, symbolName + "_blur").setOrigin(0, 0);

        // ブラー画像は縦に３倍広いため微調整
        this.blurImage.y -= SYMBOL_HEIGHT;
        this.blurImage.setVisible(false);

        this.backImage.setTint(0x808080)
        this.frontImage.blendMode = BlendModes.MULTIPLY;

        this.add(this.backImage);
        this.add(this.frontImage);
        this.add(this.blurImage);
    }

}
export default Symbol;
