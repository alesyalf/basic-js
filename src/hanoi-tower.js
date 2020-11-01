const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let seconds = turns / (turnsSpeed / 3600);
  return { turns: turns, seconds: Math.floor(seconds) };
};
