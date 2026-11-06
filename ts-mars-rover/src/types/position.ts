import { CompassDirection } from './compass';

export interface Position {
  readonly x: number;
  readonly y: number;
  readonly facing: CompassDirection;
}
