import Phaser from 'phaser';
import Body from './body';
import { ReelPosition } from './constant';
import { log } from 'console';

class SlotScene extends Phaser.Scene {
  private body: Body | null = null;
  private selectedBodyScaleID: number = 0;
  private scaleDats: number[] = [1,1.2, 1.5];

  constructor() {
    super('slot-scene');
  }

  preload(): void {
    this.load.image('top', '/assets/images/body/top.png');
    this.load.image('top_panel', '/assets/images/body/top_panel.png');
    this.load.image('middle_panel', '/assets/images/body/middle_panel.png');
    this.load.image('middle_led_off', '/assets/images/body/middle_led_off.png');
    this.load.image('middle_led_on', '/assets/images/body/middle_led_on.png');
    this.load.image('main_panel', '/assets/images/body/main_panel.png');
    this.load.image('control_panel', '/assets/images/body/control_panel.png');
    this.load.image('bottom', '/assets/images/body/bottom.png');
    this.load.image('bottom_panel', '/assets/images/body/bottom_panel.png');

    this.load.image('bar_front', '/assets/images/symbol/bar.png');
    this.load.image('bar_back', '/assets/images/symbol/bar_back.png');
    this.load.image('bar_blur', '/assets/images/symbol/bar_blur.png');

    this.load.image('bell_front', '/assets/images/symbol/bell.png');
    this.load.image('bell_back', '/assets/images/symbol/bell_back.png');
    this.load.image('bell_blur', '/assets/images/symbol/bell_blur.png');

    this.load.image('budou_front', '/assets/images/symbol/budou.png');
    this.load.image('budou_back', '/assets/images/symbol/budou_back.png');
    this.load.image('budou_blur', '/assets/images/symbol/budou_blur.png');

    this.load.image('cherry_front', '/assets/images/symbol/cherry.png');
    this.load.image('cherry_back', '/assets/images/symbol/cherry_back.png');
    this.load.image('cherry_blur', '/assets/images/symbol/cherry_blur.png');

    this.load.image('piero_front', '/assets/images/symbol/piero.png');
    this.load.image('piero_back', '/assets/images/symbol/piero_back.png');
    this.load.image('piero_blur', '/assets/images/symbol/piero_blur.png');

    this.load.image('red_7_front', '/assets/images/symbol/red_7.png');
    this.load.image('red_7_back', '/assets/images/symbol/red_7_back.png');
    this.load.image('red_7_blur', '/assets/images/symbol/red_7_blur.png');

    this.load.image('replay_front', '/assets/images/symbol/replay.png');
    this.load.image('replay_back', '/assets/images/symbol/replay_back.png');
    this.load.image('replay_blur', '/assets/images/symbol/replay_blur.png');

    this.load.image('back_light_off', '/assets/images/reel/back_light_off.png');
    this.load.image('back_light_on', '/assets/images/reel/back_light_on.png');
    this.load.image('reel_reflec', '/assets/images/reel/reel_reflec.png');
    this.load.image('reel_shadow', '/assets/images/reel/reel_shadow.png');

    // sounds
    this.load.audio('se_roll', '/assets/sounds/se_roll_01.mp3');
    this.load.audio('se_reel_stop', '/assets/sounds/se_reel_stop_01.mp3');
  }

  create(): void {
    this.body = new Body(this);
    this.body.scale *= this.scaleDats[this.selectedBodyScaleID];
    this.add.existing(this.body);
    this.body.x = -this.body.getBounds().width / 2 + (1578 / 2)
    // Canvas click (pointer down) to trigger auto control
    this.input.on('pointerdown', () => {
      this.body?.autoControl();
    });

    // Keyboard bindings: X to spin all, arrows to stop each reel
    const keyboard = this.input.keyboard;
    if (keyboard) {
      keyboard.on('keydown-X', () => {
        this.body?.spinStartAll();
      });
      keyboard.on('keydown-UP', () => {
        this.body?.spinStartAll();
      });
      keyboard.on('keydown-LEFT', () => {
        this.body?.stopLeft();
      });
      keyboard.on('keydown-DOWN', () => {
        this.body?.stopCenter();
      });
      keyboard.on('keydown-RIGHT', () => {
        this.body?.stopRight();
      });

      keyboard.on('keydown-SPACE', () => {
        this.scaleChange();
      });
    }
  }

  update(time: number, delta: number): void {
    if (this.body) {
      this.body.update(time, delta);
    }
  }

  scaleChange() {
    if (this.body) {
      this.selectedBodyScaleID++;
      this.selectedBodyScaleID %= this.scaleDats.length;
      this.body.scale = this.scaleDats[this.selectedBodyScaleID];
      this.body.x = -this.body.getBounds().width / 2 + (1578 / 2)
    }

  }
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'app',
  backgroundColor: '#000000',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1578,
    height: 2672
  },
  scene: [SlotScene]
});

export default game;


