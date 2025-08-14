import { log } from "console";
import { ReelPosition, RollName, SYMBOL_LIST } from "./constant";
import Reel from "./reel";
import { ReelController } from "./reelController";

class Body extends Phaser.GameObjects.Container {

    private top: Phaser.GameObjects.Image | null = null;
    private topPanel: Phaser.GameObjects.Image | null = null;
    private middlePanel: Phaser.GameObjects.Image | null = null;
    private middleLedOff: Phaser.GameObjects.Image | null = null;
    private mainPanel: Phaser.GameObjects.Image | null = null;
    private controlPanel: Phaser.GameObjects.Image | null = null;
    private bottom: Phaser.GameObjects.Image | null = null;
    private bottomPanel: Phaser.GameObjects.Image | null = null;
    private rollName: RollName = RollName.REACH_BONUS_SYMBOL_CENTER;

    private debugText: Phaser.GameObjects.Text | null = null;

    private reelLeft = new Reel(this.scene, SYMBOL_LIST[ReelPosition.LEFT]);
    private reelCenter = new Reel(this.scene, SYMBOL_LIST[ReelPosition.CENTER]);
    private reelRight = new Reel(this.scene, SYMBOL_LIST[ReelPosition.RIGHT]);

    private reelController: ReelController = new ReelController(this.reelLeft, this.reelCenter, this.reelRight);

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
        // this.mainPanel.alpha = 0;

        this.debugText = new Phaser.GameObjects.Text(this.scene, 0, 0, "debug text", {
            fontSize: '32px',
            color: '#ffffff',
            fontFamily: 'Arial'
        })
        this.add(this.debugText);
    }

    update(time: number, delta: number): void {
        this.reelController.update(time, delta);
    }

    public spinStartAll(): void {
        const result = this.reelController.spin();
        if (result) {
            this.rollName = Math.floor(Math.random() * 100) % 8 as RollName;
            this.reelController.setRollName(this.rollName);
            if(this.debugText){
                this.debugText.text=this.rollName.toString();
            }
            this.scene.sound.play('se_roll');
        }
    }

    public stopLeft(): void {
        const result = this.reelController.stop(ReelPosition.LEFT);
        if (result) {
            this.scene.sound.play('se_reel_stop');
        }
    }

    public stopCenter(): void {
        const result = this.reelController.stop(ReelPosition.CENTER);
        if (result) {
            this.scene.sound.play('se_reel_stop');
        }
    }

    public stopRight(): void {
        const result = this.reelController.stop(ReelPosition.RIGHT);
        if (result) {
            this.scene.sound.play('se_reel_stop');
        }
    }

    public autoControl() {
        if (!this.reelLeft.getIsSpin() &&
            !this.reelCenter.getIsSpin() &&
            !this.reelRight.getIsSpin() &&
            !this.reelLeft.getIsSlip() &&
            !this.reelCenter.getIsSlip() &&
            !this.reelRight.getIsSlip()) {
            this.spinStartAll();
            return;
        }

        if (this.reelLeft.getIsSpin() && !this.reelLeft.getIsSlip()) {
            this.stopLeft();
            return;
        }

        if (this.reelCenter.getIsSpin() && !this.reelCenter.getIsSlip()) {
            this.stopCenter();
            return;
        }

        if (this.reelRight.getIsSpin() && !this.reelRight.getIsSlip()) {
            this.stopRight();
            return;
        }
    }
}
export default Body;