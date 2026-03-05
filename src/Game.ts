import * as Phaser from "phaser";
import { PlayScene } from "./scenes/PlayScene";

export class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      backgroundColor: "#1c1c1c",
      parent: document.body,
      pixelArt: true,
      dom: {
        createContainer: true,
      },
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      scene: [PlayScene],
    });
  }
}
