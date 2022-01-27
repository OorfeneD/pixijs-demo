import { Resource, Texture } from 'pixi.js';
import * as enemiesJson from '../assets/json/enemies.json';
import { EnemyPosition } from '../types/EnemyPosition';

export default class EnemiesProvider {
  private enemies: EnemyPosition[]

  private enemiesTextures: Texture<Resource>[] = []

  constructor() {
    this.loadEnemies();
    this.loadEnemiesTextures();
  }

  private loadEnemies(): void {
    this.enemies = enemiesJson.enemies;
  }

  private loadEnemiesTextures(): void {
    for (let i = 0; i < 4; i += 1) {
      const texture = Texture.from(`idle_${i + 1}.png`);
      this.enemiesTextures.push(texture);
    }
  }

  getEnemies(): EnemyPosition[] {
    return this.enemies;
  }

  getEnemiesTextures(): Texture<Resource>[] {
    return this.enemiesTextures;
  }

  reloadEnemies(): void {
    this.loadEnemies();
  }
}
