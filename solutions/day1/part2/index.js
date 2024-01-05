import getInput from '../../../utils/getInput.js';

const lines = getInput({ day: 1, file: 'input' }).split('\n');

const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function parseLine(line) {
  let first = 0;
  let last = 0;
  let letters = [];
  const chars = line.split('');

  chars.every((char) => {
    if (!isNaN(char)) {
      first = char;
      return false;
    }

    letters.push(char);

    const text = letters.join('');

    return !digits.some((digit, i) => {
      if (text.includes(digit)) {
        first = (i + 1).toString();
        return true;
      }

      return false;
    });
  });
  letters = [];
  chars.reverse();

  chars.every((char) => {
    if (!isNaN(char)) {
      last = char;
      return false;
    }

    letters.unshift(char);

    const text = letters.join('');

    return !digits.some((digit, i) => {
      if (text.includes(digit)) {
        last = (i + 1).toString();
        return true;
      }

      return false;
    });
  });

  return parseInt(first + last);
}

console.log(lines.map(parseLine).reduce((count, number) => (count += number), 0));
