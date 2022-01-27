import {
  Sprite, Loader, Texture, Resource,
} from 'pixi.js';

export default class BackgroundProvider {
  background: Sprite

  constructor() {
    this.setupBackground();
  }

  private setupBackground(): void {
    this.background = new Sprite(Loader.shared.resources.bg.texture as Texture<Resource>);
    this.background.scale.x = 0.5;
    this.background.scale.y = 0.5;
  }

  getBackground(): Sprite {
    return this.background;
  }
}
