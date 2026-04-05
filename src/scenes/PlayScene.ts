import * as Phaser from "phaser";


export class PlayScene extends Phaser.Scene {
  private background: Phaser.GameObjects.Image;
  private player: Phaser.GameObjects.Image;
  private dragStartX = 0;
  private dragStartY = 0;
  private playerStartX = 0;
  private playerStartY = 0;
  private targetPlayerX = 0;
  private targetPlayerY = 0;

  constructor() {
    super({ key: "PlayScene" });
  }

  preload() {
    this.load.setPath("assets");

    this.load.image("background", "water/background_1c.png");
    this.load.image("player", "fish/fish_1_base.png");
  }

  async create() {
    this.background = this.add.image(0, 0, "background").setOrigin(0.5);

    const { width, height } = this.scale;
    this.player = this.add.image(width / 2, height / 2, "player").setScale(3);

    this.targetPlayerX = this.player.x;
    this.targetPlayerY = this.player.y;

    this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
      this.dragStartX = pointer.x;
      this.dragStartY = pointer.y;
      this.playerStartX = this.targetPlayerX;
      this.playerStartY = this.targetPlayerY;
    });
    this.input.on("pointermove", (pointer: Phaser.Input.Pointer) => {
      if (pointer.isDown) {
        this.targetPlayerX = this.playerStartX + (pointer.x - this.dragStartX);
        this.targetPlayerY = this.playerStartY + (pointer.y - this.dragStartY);
      }
    });

    this.scale.on("resize", this.resize, this);
    this.resize({ width, height });
  }

  update() {
    if (!this.player) return;

    const lerp = 0.12;
    const prevX = this.player.x;
    const prevY = this.player.y;

    this.player.x += (this.targetPlayerX - this.player.x) * lerp;
    this.player.y += (this.targetPlayerY - this.player.y) * lerp;

    const moveDx = this.player.x - prevX;
    const moveDy = this.player.y - prevY;

    if (moveDx < -0.5) {
      this.player.setFlipX(true);
    } else if (moveDx > 0.5) {
      this.player.setFlipX(false);
    }

    if (Math.abs(moveDx) > 0.1 || Math.abs(moveDy) > 0.1) {
      const angle = Math.atan2(moveDy, Math.abs(moveDx));
      const tiltTarget = this.player.flipX ? -angle : angle;
      this.player.rotation += (tiltTarget - this.player.rotation) * 0.15;
    } else {
      this.player.rotation += (0 - this.player.rotation) * 0.05;
    }
  }

  resize(gameSize: { width: number; height: number }) {
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
