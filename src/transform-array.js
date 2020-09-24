const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw Error;

  const ans = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next' && arr[i + 1] !== undefined) {
      ans.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next") {
      ans.push(arr[i - 1]);
    } else if (arr[i] === '--discard-next' && arr[i + 1] !== undefined) {
      i++;
    } else if (arr[i] === '--discard-prev' && arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next") {
      ans.pop();
    } else if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') {
      ans.push(arr[i]);
    }
  }
  return ans;
};
