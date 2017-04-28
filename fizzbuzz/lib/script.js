'use strict';

module.exports = (input) => {
  function fizz(number){
    return divisible(number, 3) || haveDigit(number, 3);
  }

  function buzz(number){
    return divisible(number, 5) || haveDigit(number, 5);
  }

  function fizzBuzz(number){
    return divisible(number, 3) && divisible(number, 5);
  }

  function divisible(dividend, divider){
    return (dividend % divider === 0) && (dividend !== 0);
  }

  function haveDigit(number, digit){
    return number.toString().includes(digit.toString());
  }

  if (!Array.isArray(input)) throw 'Ilegal arguments!';

  var result  = [];
  input.forEach((value) => {
    var output = '';
    if (fizzBuzz(value)) {
      output += 'FizzBuzz';
    } else {
      if (fizz(value)) output += 'Fizz';
      if (buzz(value)) output += 'Buzz';
    }
    if(output) result.push(output);
  });

  return result;
}
