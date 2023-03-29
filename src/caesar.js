// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    //Guard clause
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false;
    }

    let result = "";

    if(encode === false) {
      shift = shift * -1;
    }

    for (let i = 0; i < input.length; i++) {
      let char = input[i].toLowerCase();
      const index = alphabet.indexOf(char);
      let shiftedIndex = index + shift;

      if (shiftedIndex > 25) {
        shiftedIndex += -26;
      }
      if (shiftedIndex < 0) {
        shiftedIndex += 26;
      }
      if(alphabet.includes(char)) {
        result += alphabet.charAt(shiftedIndex);
      } else {
        result += char;
      }
      
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
