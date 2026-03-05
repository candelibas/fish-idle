import * as Phaser from 'phaser';

export class BaseScene extends Phaser.Scene {
  protected background!: Phaser.GameObjects.Image | Phaser.GameObjects.Sprite;

  preload() {
    // Override in subclasses to load assets
  }

  create() {
    // If subclass created background, good. If not, try to create from 'background' key if it exists.
    if (!this.background && this.textures.exists('background')) {
      this.background = this.add.image(0, 0, 'background').setOrigin(0.5);
    }
    
    this.scale.on('resize', this.resize, this);
    this.resize({ width: this.scale.width, height: this.scale.height });
  }

  resize(gameSize: { width: number; height: number }) {
    if (this.background) {
      const width = this.background.width;
      const height = this.background.height;
      const scale = Math.min(gameSize.width / width, gameSize.height / height);
      this.background.setPosition(gameSize.width / 2, gameSize.height / 2).setScale(scale);
    }
  }
}
