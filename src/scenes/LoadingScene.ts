import * as Phaser from "phaser";

export class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: "LoadingScene" });
  }

  preload() {
    this.load.setPath("assets");
    // this.load.image('logo', 'logo.png');
    //this.load.image('background', 'background/background.png');
  }

  create() {
    // TODO: Add a loading bar
  }
}
