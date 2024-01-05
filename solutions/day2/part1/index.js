import getInput from '../../../utils/getInput.js';

const bag = {
  red: 12,
  green: 13,
  blue: 14,
};

const games = getInput({ day: 2, file: 'input' })
  .split('\n')
  .map((game, i) => {
    const sets = game.split(':')[1];
    return {
      id: i + 1,
      sets: sets
        .trim()
        .split('; ')
        .map((gameResult) =>
          gameResult.split(', ').reduce((result, current) => {
            const [count, color] = current.split(' ');
            result[color] = count;
            return result;
          }, {})
        ),
    };
  });

const colors = Object.keys(bag);

console.log(
  games
    .filter((game) =>
      game.sets.every((set) => colors.every((color) => (set[color] || 0) <= bag[color]))
    )
    .map((game) => game.id)
    .reduce((sum, id) => (sum += id))
);
