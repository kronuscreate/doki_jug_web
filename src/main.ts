import Phaser from 'phaser';
import Body from './body';

class SlotScene extends Phaser.Scene {
  constructor() {
    super('slot-scene');
  }

  preload(): void {
    this.load.image('top', '/assets/images/top.png');
    this.load.image('top_panel', '/assets/images/top_panel.png');
    this.load.image('middle_panel', '/assets/images/middle_panel.png');
    this.load.image('middle_led_off', '/assets/images/middle_led_off.png');
    this.load.image('middle_led_on', '/assets/images/middle_led_on.png');
    this.load.image('main_panel', '/assets/images/main_panel.png');
    this.load.image('control_panel', '/assets/images/control_panel.png');
    this.load.image('bottom', '/assets/images/bottom.png');
    this.load.image('bottom_panel', '/assets/images/bottom_panel.png');
  }

  create(): void {
    const body = new Body(this);
    this.add.existing(body);
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


