import { random } from 'lodash';

export interface EmitterUserConfiguration {
  /** Emitter starting X. 0 = far left, 1 = far right. */
  x?: number;
  /** Emitter starting X. 0 = top, 1 = bottom. */
  y?: number;
  /** X Velocity of emitted objects. */
  velocityX?: number;
  /** Y Velocity of emitted objects. */
  velocityY?: number;
  /** Base lifespan of an object in frames. */
  lifespan?: number;
  /** Amount of objects. */
  amount?: number;
  /** Randomness factor applied to velocity. */
  randomness?: number;
  /** Scale. */
  scale?: number;
  color?: string;
}

type EmitterConfiguration = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  lifespan: number;
  amount: number;
  randomness: number;
  scale: number;
  color: string;
}

type EmitterObject = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  age: number;
  scale: number;
  lifespan: number;
}

function withRandomnessFactor(original: number, factor: number): number {
  const modifier = random(-factor, factor);
  const randomness = original * modifier;
  return original + randomness;
}

const EMITTER_CONFIGURATION_DEFAULT: EmitterConfiguration = {
  x: 0.5,
  y: 0,
  velocityX: 0.0015,
  velocityY: 0.0015,
  lifespan: 320,
  amount: 20,
  randomness: 0.2,
  scale: 1,
  color: 'red',
};

export class Emitter {
  configuration: EmitterConfiguration;
  /** Emitted objects. */
  objects: EmitterObject[] = [];

  constructor(options: EmitterUserConfiguration = {}) {
    this.configuration = {
      ...EMITTER_CONFIGURATION_DEFAULT,
      ...options,
    };

    this.objects = this.createObjects();
  }

  private createObjects(): EmitterObject[] {
    const objects = [];
    const { x, y, amount, randomness, velocityX, velocityY, lifespan, scale } = this.configuration;

    for (let i = 0; i < amount; i += 1) {
      objects.push({
        x: withRandomnessFactor(x, randomness),
        y: withRandomnessFactor(y, randomness),
        velocityX: withRandomnessFactor(velocityX, randomness),
        velocityY: withRandomnessFactor(velocityY, randomness),
        age: random(lifespan),
        scale: withRandomnessFactor(scale, randomness),
        lifespan: withRandomnessFactor(lifespan, randomness),
      });
    }

    return objects;
  }

  update() {
    for (let index = 0; index < this.objects.length; index += 1) {
      const object = this.objects[index];
      object.age += 1;

      if (object.age > object.lifespan) object.age = 0;
    }
  }
}
