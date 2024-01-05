import getInput from '../../../utils/getInput.js';

const games = getInput({ day: 2, file: 'input' })
  .split('\n')
  .map((game) => {
    const sets = game.split(':')[1];
    return sets
      .trim()
      .split('; ')
      .map((gameResult) =>
        gameResult.split(', ').reduce((result, current) => {
          const [count, color] = current.split(' ');
          result[color] = parseInt(count);
          return result;
        }, {})
      );
  });

const colors = ['blue', 'red', 'green'];

console.log(
  games
    .map((sets) =>
      sets.reduce(
        (maxes, set) => {
          colors.forEach((color) => {
            maxes[color] = maxes[color] > (set[color] || 0) ? maxes[color] : set[color];
          });
          return maxes;
        },
        { blue: 0, red: 0, green: 0 }
      )
    )
    .map((game) => Object.values(game).reduce((power, color) => (power *= color), 1))
    .reduce((sum, game) => (sum += game))
);
