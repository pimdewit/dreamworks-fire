import { Emitter } from './emitter';
import { EMITTER_DATA } from './emitter-data';
import { map } from 'lodash';

export class DreamworksFire {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number = 900;
  height: number = 1600;

  emitters: Emitter[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${this.width / 2}px`;
    this.canvas.style.height = `${this.height / 2}px`;
    this.canvas.style.backgroundColor = '#fcfca0';

    this.emitters = this.createEmitters();

    this.update();
  }

  private createEmitters(): Emitter[] {
    return map(EMITTER_DATA, configuration => new Emitter(configuration));
  }

  private drawEmitter(emitter: Emitter) {
    const { context, height, width } = this;

    for (let objectIndex = 0; objectIndex < emitter.objects.length; objectIndex++) {
      const { age, velocityX, velocityY, lifespan, scale } = emitter.objects[objectIndex];
      const x = width * (emitter.configuration.x + (velocityX * age));
      const y = height * (emitter.configuration.y + (velocityY * age));
      const radius = (age / lifespan) * scale;
      const base = Math.min(width, height);

      context.beginPath();
      context.arc(x, y, radius * (base / 10), 0, Math.PI * 2);
      context.fillStyle = emitter.configuration.color;
      context.fill();
    }
  }

  private animate() {
    for (let emitterIndex = 0; emitterIndex < this.emitters.length; emitterIndex++) {
      const emitter = this.emitters[emitterIndex];
      emitter.update();
      this.drawEmitter(emitter);
    }
  }

  update = () => {
    this.context.clearRect(0, 0, this.width, this.height);
    this.animate();
    requestAnimationFrame(this.update);
  };
}
