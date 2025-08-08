import { ReelPosition, SYMBOL_LIST, SymbolName } from "./constant";
import Reel from "./reel";
import Symbol from "./symbol";

class Body extends Phaser.GameObjects.Container {

    private top: Phaser.GameObjects.Image | null = null;
    private topPanel: Phaser.GameObjects.Image | null = null;
    private middlePanel: Phaser.GameObjects.Image | null = null;
    private middleLedOff: Phaser.GameObjects.Image | null = null;
    private mainPanel: Phaser.GameObjects.Image | null = null;
    private controlPanel: Phaser.GameObjects.Image | null = null;
    private bottom: Phaser.GameObjects.Image | null = null;
    private bottomPanel: Phaser.GameObjects.Image | null = null;

    constructor(scene: Phaser.Scene) {
        super(scene);
        this.create();
    }

    create(): void {
        const reelLeft=new Reel(this.scene,SYMBOL_LIST[ReelPosition.LEFT]);
        reelLeft.x=292;
        reelLeft.y=794;
        this.add(reelLeft);

        const reelCenter=new Reel(this.scene,SYMBOL_LIST[ReelPosition.CENTER]);
        reelCenter.x=645;
        reelCenter.y=794;
        this.add(reelCenter);
        
        const reelRight=new Reel(this.scene,SYMBOL_LIST[ReelPosition.RIGHT]);
        reelRight.x=997;
        reelRight.y=794;
        this.add(reelRight);

        this.top = new Phaser.GameObjects.Image(this.scene, 24, 1, 'top').setOrigin(0, 0);
        this.topPanel = new Phaser.GameObjects.Image(this.scene, 92, 271, 'top_panel').setOrigin(0, 0);
        this.middlePanel = new Phaser.GameObjects.Image(this.scene, 23, 507, 'middle_panel').setOrigin(0, 0);
        this.middleLedOff = new Phaser.GameObjects.Image(this.scene, 23, 507, 'middle_led_off').setOrigin(0, 0);
        this.mainPanel = new Phaser.GameObjects.Image(this.scene, 13, 642, 'main_panel').setOrigin(0, 0);
        this.controlPanel = new Phaser.GameObjects.Image(this.scene, 10, 1349, 'control_panel').setOrigin(0, 0);
        this.bottom = new Phaser.GameObjects.Image(this.scene, 0, 1607, 'bottom').setOrigin(0, 0);
        this.bottomPanel = new Phaser.GameObjects.Image(this.scene, 61, 1650, 'bottom_panel').setOrigin(0, 0);

        this.add(this.top);
        this.add(this.topPanel);
        this.add(this.middlePanel);
        this.add(this.middleLedOff);
        this.add(this.mainPanel);
        this.add(this.controlPanel);
        this.add(this.bottom);
        this.add(this.bottomPanel);
    }
}
export default Body;