import {
  parsePlateauSize,
  parsePosition,
  parseInstructions,
} from './parser/parser';

const plateau = parsePlateauSize('5 5');

const first_position = parsePosition('1 2 N');
const first_instructions = parseInstructions('LMLMLMLMM');

const second_position = parsePosition('3 3 E');
const second_instructions = parseInstructions('MMRMMRMRRM');

console.log(plateau);
console.log(first_position);
console.log(first_instructions);
console.log(second_position);
console.log(second_instructions);
