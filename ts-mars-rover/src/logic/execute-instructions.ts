import type { Position } from '../types/position';
import type { Instruction } from '../types/instructions';
import type { PlateauSize } from '../types/plateau-size';
import { move } from './move';
import { rotate } from './rotate';
import { validatePosition } from './validate-position';

export function executeInstructions(
  position: Position,
  instructions: Instruction[],
  plateau: PlateauSize,
): Position {
  validatePosition(position, plateau);

  let current_position = { ...position };

  for (const instruction of instructions) {
    switch (instruction) {
      case 'L':
      case 'R':
        current_position = {
          ...current_position,
          facing: rotate(current_position.facing, instruction),
        };
        break;
      case 'M':
        current_position = move(current_position, plateau);
        break;
      default: {
        const unhandled: never = instruction;
        throw new Error(`Unhandled instruction: ${unhandled}`);
      }
    }
  }

  return current_position;
}
