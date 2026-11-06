import type { Position } from '../types/position';
import type { PlateauSize } from '../types/plateau-size';

export function validatePosition(position: Position, plateau: PlateauSize): void {
  if (
    ![plateau.x, plateau.y].every((value) => Number.isSafeInteger(value) && value >= 0)
  ) {
    throw new Error('Plateau coordinates must be non-negative safe integers.');
  }

  if (
    ![position.x, position.y].every((value) => Number.isSafeInteger(value) && value >= 0)
  ) {
    throw new Error('Position coordinates must be non-negative safe integers.');
  }

  if (position.x > plateau.x || position.y > plateau.y) {
    throw new Error('Position is outside the plateau.');
  }
}
