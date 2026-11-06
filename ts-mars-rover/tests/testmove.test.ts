import { describe, test, expect } from 'vitest';
import { move } from '../src/logic/move';
import type { Position } from '../src/types/position';

describe('test move', () => {
  test('moves north by one square', () => {
    expect(move({ x: 1, y: 2, facing: 'N' }, { x: 5, y: 5 })).toEqual({
      x: 1,
      y: 3,
      facing: 'N',
    });
  });

  test('moves east by one square', () => {
    expect(move({ x: 1, y: 2, facing: 'E' }, { x: 5, y: 5 })).toEqual({
      x: 2,
      y: 2,
      facing: 'E',
    });
  });

  test('moves south by one square', () => {
    expect(move({ x: 1, y: 2, facing: 'S' }, { x: 5, y: 5 })).toEqual({
      x: 1,
      y: 1,
      facing: 'S',
    });
  });

  test('moves west by one square', () => {
    expect(move({ x: 1, y: 2, facing: 'W' }, { x: 5, y: 5 })).toEqual({
      x: 0,
      y: 2,
      facing: 'W',
    });
  });

  test('keeps the original position unchanged', () => {
    const position: Position = { x: 1, y: 2, facing: 'N' };

    const new_position = move(position, { x: 5, y: 5 });

    expect(position).toEqual({ x: 1, y: 2, facing: 'N' });
    expect(new_position).not.toBe(position);
  });

  test('can move onto the maximum coordinates', () => {
    expect(move({ x: 5, y: 4, facing: 'N' }, { x: 5, y: 5 })).toEqual({
      x: 5,
      y: 5,
      facing: 'N',
    });
    expect(move({ x: 4, y: 5, facing: 'E' }, { x: 5, y: 5 })).toEqual({
      x: 5,
      y: 5,
      facing: 'E',
    });
  });

  test('throws when moving past the north edge', () => {
    expect(() => move({ x: 1, y: 5, facing: 'N' }, { x: 5, y: 5 })).toThrow();
  });

  test('throws when moving past the east edge', () => {
    expect(() => move({ x: 5, y: 2, facing: 'E' }, { x: 5, y: 5 })).toThrow();
  });

  test('throws when moving past the south edge', () => {
    expect(() => move({ x: 1, y: 0, facing: 'S' }, { x: 5, y: 5 })).toThrow();
  });

  test('throws when moving past the west edge', () => {
    expect(() => move({ x: 0, y: 2, facing: 'W' }, { x: 5, y: 5 })).toThrow();
  });

  test('throws for invalid plateau coordinates', () => {
    const position: Position = { x: 1, y: 2, facing: 'N' };

    expect(() => move(position, { x: -1, y: 5 })).toThrow();
    expect(() => move(position, { x: 5, y: 5.5 })).toThrow();
    expect(() => move(position, { x: NaN, y: 5 })).toThrow();
    expect(() => move(position, { x: 5, y: Infinity })).toThrow();
  });

  test('throws when starting outside the plateau', () => {
    expect(() => move({ x: -1, y: 2, facing: 'E' }, { x: 5, y: 5 })).toThrow();
    expect(() => move({ x: 1, y: 6, facing: 'S' }, { x: 5, y: 5 })).toThrow();
  });

  test('throws for invalid position coordinates', () => {
    expect(() => move({ x: 1.5, y: 2, facing: 'N' }, { x: 5, y: 5 })).toThrow();
    expect(() => move({ x: 1, y: NaN, facing: 'N' }, { x: 5, y: 5 })).toThrow();
  });
});
