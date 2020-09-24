const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
    };
  
  date.getUTCFullYear();

  let n = date.getMonth();
  if (n === 0 || n === 1 || n === 11) {
    return 'winter';
  };
  if (n === 2 || n === 3 || n === 4) {
    return 'spring';
  };
  if (n === 5 || n === 6 || n === 7) {
    return 'summer';
  };
  if (n === 8 || n === 9 || n === 10) {
    return 'fall';
  };
}
