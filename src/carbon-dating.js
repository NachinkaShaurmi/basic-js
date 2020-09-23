const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity === "string" && +sampleActivity === parseFloat(sampleActivity)
   && parseFloat(sampleActivity) > 0 && +sampleActivity <= MODERN_ACTIVITY) {
    let answer = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
    return answer;
  }
  return false;
};
