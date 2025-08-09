import { SYMBOL_HEIGHT, SymbolName } from "./constant";
import Symbol from "./symbol";

class Reel extends Phaser.GameObjects.Container {
    private symbols: Symbol[] = [];
    private backLights: Phaser.GameObjects.Image[] = [];
    private vRoll: number = 0;
    private vRollMax: number = 49.3;
    private isSpin: boolean = false;

    public getIsSpin(){
        return this.isSpin;
    }
    
    constructor(scene: Phaser.Scene, symbolNames: SymbolName[]) {
        super(scene);
        this.create(symbolNames);
    }

    private create(symbolNames: SymbolName[]) {
        for (let i = 0; i < 3; i++) {
            const back_light_off = new Phaser.GameObjects.Image(this.scene, 0, 0, "back_light_off").setOrigin(0, 0);
            back_light_off.y = SYMBOL_HEIGHT * i;
            this.add(back_light_off);
            const back_light_on = new Phaser.GameObjects.Image(this.scene, 0, 0, "back_light_on").setOrigin(0, 0);
            back_light_on.y = SYMBOL_HEIGHT * i;
            this.add(back_light_on);
            this.backLights.push(back_light_on);
        }

        for (let i = 0; i < symbolNames.length; i++) {
            const symbol = new Symbol(this.scene, symbolNames[i]);
            symbol.y = SYMBOL_HEIGHT * i;
            this.add(symbol);
            this.symbols.push(symbol);
        }

        const reelShadow = new Phaser.GameObjects.Image(this.scene, 0, 0, "reel_shadow").setOrigin(0, 0);
        this.add(reelShadow);
        const reelReflec = new Phaser.GameObjects.Image(this.scene, 0, 0, "reel_reflec").setOrigin(0, 0);
        this.add(reelReflec);
    }

    update(time: number, delta: number) {
        if (this.isSpin) {
            if (this.vRoll < this.vRollMax) {
                this.vRoll += (0.03 * delta) + (this.vRoll / 3);
            } else {
                this.vRoll = this.vRollMax;
            }
        }

        // 子オブジェクトの update を呼ぶ場合
        this.symbols.forEach(child => {
            child.y += this.vRoll;
            if (this.vRoll > 0) {
                if (child.y >= SYMBOL_HEIGHT * 19) {
                    child.y -= SYMBOL_HEIGHT * 20;
                }
                if (child.y < 0) {
                    child.setVisible(true);
                }
                if (child.y > SYMBOL_HEIGHT * 3) {
                    child.setVisible(false);
                }
            } else {
                if (child.y <= -SYMBOL_HEIGHT) {
                    child.setVisible(false);
                    child.y += SYMBOL_HEIGHT * 20;
                }
                if (child.y < SYMBOL_HEIGHT * 3) {
                    child.setVisible(true);
                }
            }
            // リールブラー
            child.setBlurAlpha(this.vRoll / this.vRollMax);
        });
    }

    public spinStart() {
        this.isSpin=true;
    }
    public spinStop() {
        this.isSpin=false;
        this.vRoll=0;
    }
}
export default Reel