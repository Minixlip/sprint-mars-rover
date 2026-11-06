import { describe, test, expect } from 'vitest';
import { executeInstructions } from '../src/logic/execute-instructions';
import type { Position } from '../src/types/position';
import type { Instruction } from '../src/types/instructions';

describe('test execute instructions', () => {
  test('keeps the position when there are no instructions', () => {
    expect(executeInstructions({ x: 1, y: 2, facing: 'N' }, [], { x: 5, y: 5 })).toEqual({
      x: 1,
      y: 2,
      facing: 'N',
    });
  });

  test('follows multiple moves', () => {
    expect(executeInstructions({ x: 1, y: 2, facing: 'N' }, ['M', 'M'], { x: 5, y: 5 })).toEqual({
      x: 1,
      y: 4,
      facing: 'N',
    });
  });

  test('can turn on a plateau with maximum coordinates of zero', () => {
    expect(executeInstructions({ x: 0, y: 0, facing: 'N' }, ['R'], { x: 0, y: 0 })).toEqual({
      x: 0,
      y: 0,
      facing: 'E',
    });
  });

  test('returns the first rover result from the brief', () => {
    const instructions: Instruction[] = ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'];

    expect(executeInstructions({ x: 1, y: 2, facing: 'N' }, instructions, { x: 5, y: 5 })).toEqual({
      x: 1,
      y: 3,
      facing: 'N',
    });
  });

  test('returns the second rover result from the brief', () => {
    const instructions: Instruction[] = ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'];

    expect(executeInstructions({ x: 3, y: 3, facing: 'E' }, instructions, { x: 5, y: 5 })).toEqual({
      x: 5,
      y: 1,
      facing: 'E',
    });
  });

  test('keeps the original position and instructions unchanged', () => {
    const position: Position = { x: 1, y: 2, facing: 'N' };
    const instructions: Instruction[] = ['R', 'M'];

    const new_position = executeInstructions(position, instructions, { x: 5, y: 5 });

    expect(position).toEqual({ x: 1, y: 2, facing: 'N' });
    expect(instructions).toEqual(['R', 'M']);
    expect(new_position).toEqual({ x: 2, y: 2, facing: 'E' });
    expect(new_position).not.toBe(position);
  });

  test('throws if an instruction takes the rover off the plateau', () => {
    expect(() => executeInstructions(
      { x: 4, y: 2, facing: 'N' }, ['R', 'M', 'M'], { x: 5, y: 5 },
    )).toThrow();
  });

  test('checks the starting position even without instructions', () => {
    expect(() => executeInstructions(
      { x: 6, y: 2, facing: 'N' }, [], { x: 5, y: 5 },
    )).toThrow();
  });

  test('checks the plateau even without instructions', () => {
    expect(() => executeInstructions(
      { x: 0, y: 0, facing: 'N' }, [], { x: 5, y: -1 },
    )).toThrow();
  });
});
