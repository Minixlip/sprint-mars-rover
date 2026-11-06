import { describe, test, expect } from 'vitest';
import {
  parseCoordinate,
  parseInstructions,
  parsePosition,
  parsePlateauSize,
} from '../src/parser/parser';

describe('test parse coordinate', () => {
  const num_str = '5';

  test('successfully returns a 5', () => {
    expect(parseCoordinate(num_str)).toBe(5);
  });

  const multiple_num = '5 5';

  test('throws an error', () => {
    expect(() => parseCoordinate(multiple_num)).toThrow();
  });
});

describe('test parse instructions', () => {
  const instructions = 'LMR';

  test('successfully returns the instructions', () => {
    expect(parseInstructions(instructions)).toEqual(['L', 'M', 'R']);
  });

  const invalid_instructions = 'LMX';

  test('throws an error', () => {
    expect(() => parseInstructions(invalid_instructions)).toThrow();
  });
});

describe('test parse position', () => {
  const position = '1 2 N';

  test('successfully returns the position', () => {
    expect(parsePosition(position)).toEqual({ x: 1, y: 2, facing: 'N' });
  });

  const invalid_position = '1 2 X';

  test('throws an error', () => {
    expect(() => parsePosition(invalid_position)).toThrow();
  });
});

describe('test parse plateau size', () => {
  const plateau_size = '5 5';

  test('successfully returns the plateau size', () => {
    expect(parsePlateauSize(plateau_size)).toEqual({ x: 5, y: 5 });
  });

  const invalid_plateau_size = '5';

  test('throws an error', () => {
    expect(() => parsePlateauSize(invalid_plateau_size)).toThrow();
  });
});
