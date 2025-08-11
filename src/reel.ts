import { log } from "console";
import { SYMBOL_HEIGHT, SymbolName } from "./constant";
import Symbol from "./symbol";
import { BlendModes } from "phaser";

class Reel extends Phaser.GameObjects.Container {
    private symbols: Symbol[] = [];
    private backLights: Phaser.GameObjects.Image[] = [];
    private vRoll: number = 0;
    private vRollMax: number = 49.3;
    private isSpin: boolean = false;
    private reelY: number = 0;
    private stopY: number = 0;
    private stopToY: number = 0;
    private isSlip: boolean = false;
    private debugText: Phaser.GameObjects.Text | null = null;

    public getIsSpin() {
        return this.isSpin;
    }

    public getIsSlip() {
        return this.isSlip;
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
        reelReflec.alpha=0.9;

        this.debugText = new Phaser.GameObjects.Text(this.scene, 0, -32, "", {
            fontSize: '32px',
            color: '#ffffff',
            fontFamily: 'Arial'
        })
        this.add(this.debugText);
    }

    update(time: number, delta: number) {
        if (this.isSpin) {
            if (this.vRoll < this.vRollMax) {
                this.vRoll += (0.05 * delta) + (this.vRoll / 5);
            } else {
                this.vRoll = this.vRollMax;
            }
        }
        this.reelY += this.vRoll;

        if (this.isSlip) {
            if (this.reelY > this.stopToY) {
                this.reelY=this.stopToY;
                this.isSpin = false;
                this.isSlip = false;
                this.vRoll = 0;
            }
        }
        this.loopPositionCheck(this.vRoll);
    }

    public spinStart() {
        this.isSpin = true;
    }
    public spinStop() {
        this.isSlip = true;
        this.stopY = this.reelY;
        this.stopToY = Math.floor((this.reelY + SYMBOL_HEIGHT) / (SYMBOL_HEIGHT)) * SYMBOL_HEIGHT;
        if (this.stopToY >= SYMBOL_HEIGHT * 20) {
            this.stopToY -= SYMBOL_HEIGHT * 20;
        }
    }

    public debugMove(amount: number) {
        this.reelY += amount;
        this.loopPositionCheck(amount);
    }

    private loopPositionCheck(vRoll: number) {
        if (this.reelY < 0) {
            this.reelY += SYMBOL_HEIGHT * 20;
        }
        this.reelY = Math.floor(this.reelY % (SYMBOL_HEIGHT * 20));
        if (this.debugText) {
            this.debugText.text = this.stopY + ":" + this.stopToY + ":" + this.reelY;
        }

        // 子オブジェクトの update を呼ぶ場合
        this.symbols.forEach((child, index) => {
            child.y = this.reelY + (SYMBOL_HEIGHT * index);
            if (child.y >= SYMBOL_HEIGHT * 19) {
                child.y -= SYMBOL_HEIGHT * 20;
                child.setVisible(true);
            }
            if (child.y > SYMBOL_HEIGHT * 3) {
                child.setVisible(false);
            } else {
                child.setVisible(true);
            }
            // リールブラー
            child.setBlurAlpha(vRoll / this.vRollMax);
        });
    }
}
export default Reel