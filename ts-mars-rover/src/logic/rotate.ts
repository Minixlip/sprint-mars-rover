import type { CompassDirection } from '../types/compass';
import type { Instruction } from '../types/instructions';

type Rotation = Exclude<Instruction, 'M'>;

const turns: Record<Rotation, Record<CompassDirection, CompassDirection>> = {
  L: { N: 'W', E: 'N', S: 'E', W: 'S' },
  R: { N: 'E', E: 'S', S: 'W', W: 'N' },
};

export function rotate(
  direction: CompassDirection,
  rotation: Rotation,
): CompassDirection {
  return turns[rotation][direction];
}
