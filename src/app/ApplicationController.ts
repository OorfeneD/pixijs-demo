import {
  Application, DisplayObject, Loader, Ticker,
} from 'pixi.js';

export default class ApplicationController {
  app: Application

  loader: Loader

  ticker: Ticker

  constructor(width: number, height: number, color: number) {
    this.app = new Application({
      width,
      height,
      backgroundColor: color,
      sharedTicker: true,
      sharedLoader: true,
    });
    this.loader = Loader.shared;
    this.ticker = Ticker.shared;
  }

  getView(): HTMLCanvasElement {
    return this.app.view;
  }

  addStageChild(v: DisplayObject): void {
    this.app.stage.addChild(v);
  }

  removeStageChild(v: DisplayObject): void {
    this.app.stage.removeChild(v);
  }

  startApp(): void {
    this.app.start();
  }

  getTicker(): Ticker {
    return this.ticker;
  }
}
