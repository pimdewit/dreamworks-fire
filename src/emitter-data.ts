import { EmitterUserConfiguration } from './emitter';

const COLORS = {
  FLAME_LIGHT: '#fcfca0',
  FLAME_MEDIUM: '#fcfca0',
  FLAME: '#f75f00',
  MASK: '#3b0407',
  DEBUG: 'blue',
};

export const EMITTER_DATA: EmitterUserConfiguration[] = [
  {
    x: 0.5,
    y: 1.4,
    velocityX: 0.002,
    velocityY: -0.02,
    amount: 16,
    scale: 6,
    lifespan: 160,
    randomness: 0.6,
    color: COLORS.FLAME_LIGHT,
  },
  {
    x: 0.5,
    y: 1.4,
    velocityX: -0.002,
    velocityY: -0.02,
    amount: 16,
    scale: 6,
    lifespan: 160,
    randomness: 0.6,
    color: COLORS.FLAME_LIGHT,
  },

  // Bottom corners mask.
  {
    x: 0.5,
    y: 1.15,
    velocityX: -0.03,
    velocityY: -0.01,
    amount: 24,
    scale: 3,
    color: COLORS.MASK,
    lifespan: 32,
  },
  {
    x: 0.5,
    y: 1.15,
    velocityX: 0.03,
    velocityY: -0.01,
    amount: 24,
    scale: 3,
    color: COLORS.MASK,
    lifespan: 32,
  },

  // Top mask.
  {
    x: 0.2,
    y: 1,
    velocityX: -0.0099,
    velocityY: -0.018,
    amount: 16,
    scale: 16,
    color: COLORS.MASK,
    lifespan: 128,
  },
  {
    x: 1 - 0.2,
    y: 1,
    velocityX: 0.0099,
    velocityY: -0.018,
    amount: 16,
    scale: 16,
    color: COLORS.MASK,
    lifespan: 128,
  },


  // Bottom corners mask.
  {
    x: 0.3,
    y: 1.15,
    velocityX: -0.015,
    velocityY: -0.01,
    amount: 12,
    scale: 5,
    color: COLORS.MASK,
    lifespan: 48,
  },
  {
    x: 1 - 0.3,
    y: 1.15,
    velocityX: 0.015,
    velocityY: -0.01,
    amount: 12,
    scale: 5,
    color: COLORS.MASK,
    lifespan: 48,
  },
];
