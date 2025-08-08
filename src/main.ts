import Phaser from 'phaser';

class DemoScene extends Phaser.Scene {
  constructor() {
    super('demo');
  }

  preload(): void {
    this.load.image('top', 'public/assets/images/top.png');
    this.load.image('top_panel', 'public/assets/images/top_panel.png');
    this.load.image('middle_panel', 'public/assets/images/middle_panel.png');
    this.load.image('middle_led_off', 'public/assets/images/middle_led_off.png');
    this.load.image('middle_led_on', 'public/assets/images/middle_led_on.png');
    this.load.image('main_panel', 'public/assets/images/main_panel.png');
    this.load.image('control_panel', 'public/assets/images/control_panel.png');
    this.load.image('bottom', 'public/assets/images/bottom.png');
    this.load.image('bottom_panel', 'public/assets/images/bottom_panel.png');

  }

  create(): void {
    this.add.image(24, 1, 'top').setOrigin(0, 0);
    this.add.image(92, 271, 'top_panel').setOrigin(0, 0);
    this.add.image(23, 507, 'middle_panel').setOrigin(0, 0);
    this.add.image(23, 507, 'middle_led_off').setOrigin(0, 0);
    this.add.image(13, 642, 'main_panel').setOrigin(0, 0);
    this.add.image(10, 1349, 'control_panel').setOrigin(0, 0);
    this.add.image(0, 1607, 'bottom').setOrigin(0, 0);
    this.add.image(61, 1650, 'bottom_panel').setOrigin(0, 0);
  }
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'app',
  backgroundColor: '#242424',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1578,
    height: 2672
  },
  scene: [DemoScene]
});

export default game;


