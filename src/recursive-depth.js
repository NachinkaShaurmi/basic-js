const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let maxDeep = 1; 
    for (let el of arr) {
      let deep = 1;
      if (Array.isArray(el)) {
        deep += this.calculateDepth(el);
        if (deep > maxDeep) maxDeep = deep;
      }
    }
    return maxDeep; 
  }
}