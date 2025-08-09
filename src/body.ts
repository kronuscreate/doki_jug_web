import { ReelPosition, SYMBOL_LIST } from "./constant";
import Reel from "./reel";

class Body extends Phaser.GameObjects.Container {

    private top: Phaser.GameObjects.Image | null = null;
    private topPanel: Phaser.GameObjects.Image | null = null;
    private middlePanel: Phaser.GameObjects.Image | null = null;
    private middleLedOff: Phaser.GameObjects.Image | null = null;
    private mainPanel: Phaser.GameObjects.Image | null = null;
    private controlPanel: Phaser.GameObjects.Image | null = null;
    private bottom: Phaser.GameObjects.Image | null = null;
    private bottomPanel: Phaser.GameObjects.Image | null = null;

    private reelLeft = new Reel(this.scene, SYMBOL_LIST[ReelPosition.LEFT]);
    private reelCenter = new Reel(this.scene, SYMBOL_LIST[ReelPosition.CENTER]);
    private reelRight = new Reel(this.scene, SYMBOL_LIST[ReelPosition.RIGHT]);

    constructor(scene: Phaser.Scene) {
        super(scene);
        this.create();
    }

    create(): void {
        this.reelLeft.x = 292;
        this.reelLeft.y = 794;
        this.add(this.reelLeft);

        this.reelCenter.x = 645;
        this.reelCenter.y = 794;
        this.add(this.reelCenter);

        this.reelRight.x = 997;
        this.reelRight.y = 794;
        this.add(this.reelRight);

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

    update(time: number, delta: number): void {
        this.reelLeft.update(time, delta);
        this.reelCenter.update(time, delta);
        this.reelRight.update(time, delta);
    }

    public spinStartAll(): void {
        if (this.reelLeft.getIsSpin() ||
        this.reelCenter.getIsSpin() ||
        this.reelRight.getIsSpin()) {
        return;
    }
        this.reelLeft.spinStart();
        this.reelCenter.spinStart();
        this.reelRight.spinStart();
        this.scene.sound.play('se_roll');
    }

    public stopLeft(): void {
        if(!this.reelLeft.getIsSpin()){
            return;
        }
        this.reelLeft.spinStop();
        this.scene.sound.play('se_reel_stop');
    }

    public stopCenter(): void {
        if(!this.reelCenter.getIsSpin()){
            return;
        }
        this.reelCenter.spinStop();
        this.scene.sound.play('se_reel_stop');
    }

    public stopRight(): void {
        if(!this.reelRight.getIsSpin()){
            return;
        }
        this.reelRight.spinStop();
        this.scene.sound.play('se_reel_stop');
    }

    public autoControl() {
        if (!this.reelLeft.getIsSpin() &&
            !this.reelCenter.getIsSpin() &&
            !this.reelRight.getIsSpin()) {
            this.spinStartAll();
            return;
        }

        if(this.reelLeft.getIsSpin()){
            this.stopLeft();
            return;
        }

        if(this.reelCenter.getIsSpin()){
            this.stopCenter();
            return;
        }

        if(this.reelRight.getIsSpin()){
            this.stopRight();
            return;
        }
    }
}
export default Body;