import type { Instruction } from '../types/instructions';
import type { CompassDirection } from '../types/compass';
import type { Position } from '../types/position';
import type { PlateauSize } from '../types/plateau-size';

function isInstruction(value: string): value is Instruction {
  return value === 'L' || value === 'R' || value === 'M';
}

function isCompassDirection(value: string): value is CompassDirection {
  return value === 'N' || value === 'E' || value === 'S' || value === 'W';
}

function parseCoordinate(value: string): number {
  const coordinate = Number(value);

  if (!/^\d+$/.test(value) || !Number.isSafeInteger(coordinate)) {
    throw new Error(`Invalid coordinate "${value}": expected a non-negative integer.`);
  }

  return coordinate;
}

export function parseInstructions(rawInstructions: string): Instruction[] {
  const characters = rawInstructions.trim().split('');

  if (characters.length === 0) {
    throw new Error('Instructions must contain at least one L, R, or M.');
  }

  return characters.map((character) => {
    if (!isInstruction(character)) {
      throw new Error(`Invalid instruction "${character}": expected L, R, or M.`);
    }

    return character;
  });
}

export function parsePosition(rawPosition: string): Position {
  const parts = rawPosition.trim().split(/\s+/);

  if (parts.length !== 3) {
    throw new Error('Position must contain two coordinates and a direction, e.g. "1 2 N".');
  }

  const [rawX, rawY, facing] = parts;

  if (!isCompassDirection(facing)) {
    throw new Error(`Invalid direction "${facing}": expected N, E, S, or W.`);
  }

  return { x: parseCoordinate(rawX), y: parseCoordinate(rawY), facing };
}

export function parsePlateauSize(rawPlateauSize: string): PlateauSize {
  const parts = rawPlateauSize.trim().split(/\s+/);

  if (parts.length !== 2) {
    throw new Error('Plateau size must contain two coordinates, e.g. "5 5".');
  }

  const [rawX, rawY] = parts;

  return { x: parseCoordinate(rawX), y: parseCoordinate(rawY) };
}
