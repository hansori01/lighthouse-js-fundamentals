/* Square Code

// take the spaces out of a string
// find the length of the string
// find the square root
// run a function that outputs the string with a \n after sq.r number
// print it
//loop through and print going down the column
  // we can hold each row as array and print arr[0][0] arr[1][0] etc..


  */

const squareCode = function (message) {
  let str = message.replace(/\s/g, '')//delete space 'chillout'
  let num = Math.ceil(Math.sqrt(str.length));// the sqrt of the str length
  let output = '';
  let iter = 0;

  for (let r = iter; r < num; r++) {
    for (let i = iter; i < str.length; i += num) {// loop through the entirety of string
      output += str[i]
    }
    output += ' ';
    iter++
  }
  return output;
};
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));