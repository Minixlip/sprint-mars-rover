import { describe, test, expect } from 'vitest';
import { rotate } from '../src/logic/rotate';

describe('test rotate', () => {
  test('turns right from north to east', () => {
    expect(rotate('N', 'R')).toBe('E');
  });

  test('turns left from north to west', () => {
    expect(rotate('N', 'L')).toBe('W');
  });
});
