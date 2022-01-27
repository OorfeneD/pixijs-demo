import { Loader } from 'pixi.js';
import ApplicationController from './app/ApplicationController';
import BackgroundProvider from './app/Background';
import EnemiesController from './app/EnemiesController';
import EnemiesProvider from './app/EnemiesProvider';

const SIZE = { x: 900, y: 500 };

Loader.shared.add('bg', '/assets/img/back.png');
Loader.shared.add('spritesheet', '/assets/spritesheet/enemy.json');
Loader.shared.load(() => {
  const appController = new ApplicationController(SIZE.x, SIZE.y, 0x006600);
  document.body.appendChild(appController.getView());
  const bg = new BackgroundProvider();
  appController.addStageChild(bg.getBackground());

  const enemiesProvider = new EnemiesProvider();
  const enemiesController = new EnemiesController(appController, enemiesProvider);

  enemiesController.generateEnemies();
  enemiesController.generateEnemiesCounter();

  appController.startApp();
});
