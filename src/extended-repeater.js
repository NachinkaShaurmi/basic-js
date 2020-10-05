const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|" }) {
  let result = '';
  //str = str.toString();
  //addition = addition.toString();
  if (addition === "" || additionRepeatTimes === 1) additionSeparator = "";
  result = (str + (addition + additionSeparator)
  .repeat(additionRepeatTimes - 1) + addition + separator)
  .repeat(repeatTimes - 1) + str + (addition + additionSeparator)  
  .repeat(additionRepeatTimes - 1) + addition;
  return result;
};
  