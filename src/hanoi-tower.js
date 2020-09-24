const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  const turn = 2 ** disksNumber - 1;
  const sec = Math.floor(turn / turnsSpeed * 3600);
  obj.turns = turn;
  obj.seconds = sec;
  return obj;
};
