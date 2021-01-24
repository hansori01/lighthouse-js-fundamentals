/* Number Guesser

Guessing game where the user has to guess a secret number.
After every guess, the program tells the user whether thier number was too large or small.
Once the game is over, the number of tries should be printed.
Inputting the same number multiple times should only count as one try.
If answer is not a number print an error and don't count it as a try.

- declare a function
- random number generator




*/

const prompt = require('prompt-sync')();
 
const name = prompt('What is your name?');
console.log(`Hey there ${name}`);