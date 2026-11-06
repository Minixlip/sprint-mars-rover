import type { CompassDirection } from '../types/compass';
import type { Instruction } from '../types/instructions';

type Rotation = Exclude<Instruction, 'M'>;

export function rotate(
  direction: CompassDirection,
  rotation: Rotation,
): CompassDirection {
  return direction;
}
