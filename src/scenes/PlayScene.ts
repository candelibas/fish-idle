import * as Phaser from "phaser";


export class PlayScene extends Phaser.Scene {
  private background: Phaser.GameObjects.Image;

  constructor() {
    super({ key: "PlayScene" });
  }

  preload() {
    this.load.setPath("assets");

    this.load.image("background", "bg.png");
  }

  async create() {
    this.background = this.add.image(0, 0, "background").setOrigin(0.5);

    this.scale.on("resize", this.resize, this);
    this.resize({ width: this.scale.width, height: this.scale.height });
  }

  update() { }

  resize(gameSize: { width: number; height: number }) {

    console.log(gameSize)
    if (this.background) {
      const bgScale = Math.max(
        gameSize.width / this.background.width,
        gameSize.height / this.background.height
      );
      this.background
        .setPosition(gameSize.width / 2, gameSize.height / 2)
        .setScale(bgScale);
    }
  }
}
