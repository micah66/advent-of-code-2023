import getInput from '../../../utils/getInput.js';

const lines = getInput({ day: 1, file: 'input' }).split('\n');

function parseLine(line) {
  const chars = line.split('');

  const numbers = chars.filter((char) => !isNaN(char));

  numbers.splice(1, numbers.length - 2);

  return parseInt(numbers[0] + (numbers[1] || numbers[0]));
}

console.log(lines.map(parseLine).reduce((sum, current) => (sum += current)));
