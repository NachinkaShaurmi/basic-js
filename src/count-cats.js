const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach(element => {
    element.forEach(el => {
      if (el === "^^") count++;
    });
  });
  return count;
};
