const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(text, key) {
    if (arguments.length < 2 || text == undefined || key == undefined) throw new Error;
  }    
  decrypt(text, key) {
    if (arguments.length < 2 || text == undefined || key == undefined) throw new Error;
  }
}

module.exports = VigenereCipheringMachine;
