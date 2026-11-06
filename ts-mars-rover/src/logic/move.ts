import type { Position } from '../types/position';
import type { PlateauSize } from '../types/plateau-size';
import type { CompassDirection } from '../types/compass';
import { validatePosition } from './validate-position';

const steps: Record<CompassDirection, { x: number; y: number }> = {
  N: { x: 0, y: 1 },
  E: { x: 1, y: 0 },
  S: { x: 0, y: -1 },
  W: { x: -1, y: 0 },
};

export function move(position: Position, plateau: PlateauSize): Position {
  validatePosition(position, plateau);

  const step = steps[position.facing];
  const new_position: Position = {
    ...position,
    x: position.x + step.x,
    y: position.y + step.y,
  };

  validatePosition(new_position, plateau);

  return new_position;
}
