import {
  Texture, Resource, AnimatedSprite, Ticker, Text,
} from 'pixi.js';
import { EnemyPosition } from '../types/EnemyPosition';
import ApplicationController from './ApplicationController';
import EnemiesProvider from './EnemiesProvider';

export default class EnemiesController {
  private appController: ApplicationController

  private provider: EnemiesProvider

  private enemiesPositions: EnemyPosition[]

  private enemiesTextures: Texture<Resource>[] = []

  private enemiesSprites: AnimatedSprite[] = []

  constructor(applicationController: ApplicationController, enemiesProvider: EnemiesProvider) {
    this.appController = applicationController;
    this.provider = enemiesProvider;
    this.enemiesPositions = this.provider.getEnemies();
    this.enemiesTextures = this.provider.getEnemiesTextures();
  }

  generateEnemies(): void {
    this.enemiesPositions.forEach((v: EnemyPosition) => {
      const enemySprite = new AnimatedSprite(this.enemiesTextures);
      enemySprite.x = v.x * 50 + 25;
      enemySprite.y = v.y * 50 + 25;
      enemySprite.anchor.set(0.5);
      enemySprite.animationSpeed = 0.1;
      enemySprite.gotoAndPlay(Math.floor(4 * Math.random()));
      enemySprite.interactive = true;
      enemySprite.on('pointerdown', () => {
        this.appController.removeStageChild(enemySprite);
        this.enemiesSprites = this.enemiesSprites.filter((es) => es !== enemySprite);
      });
      this.appController.addStageChild(enemySprite);
      this.enemiesSprites.push(enemySprite);
    });
  }

  getEnemiesCounter(): number {
    return this.enemiesSprites.length;
  }

  generateEnemiesCounter(): void {
    const counter = new Text('Enemies: 0', { fill: 0xffffff });
    this.appController.addStageChild(counter);
    Ticker.shared.add(() => {
      counter.text = `Enemies: ${this.getEnemiesCounter()}`;
    });
  }
}
