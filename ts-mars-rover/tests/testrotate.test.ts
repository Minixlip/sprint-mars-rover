import { describe, test, expect } from 'vitest';
import { rotate } from '../src/logic/rotate';

describe('test rotate', () => {
  test('turns right from north to east', () => {
    expect(rotate('N', 'R')).toBe('E');
  });

  test('turns left from north to west', () => {
    expect(rotate('N', 'L')).toBe('W');
  });

  test('turns right from east to south', () => {
    expect(rotate('E', 'R')).toBe('S');
  });

  test('turns left from east to north', () => {
    expect(rotate('E', 'L')).toBe('N');
  });

  test('turns right from south to west', () => {
    expect(rotate('S', 'R')).toBe('W');
  });

  test('turns left from south to east', () => {
    expect(rotate('S', 'L')).toBe('E');
  });

  test('turns right from west to north', () => {
    expect(rotate('W', 'R')).toBe('N');
  });

  test('turns left from west to south', () => {
    expect(rotate('W', 'L')).toBe('S');
  });
});
