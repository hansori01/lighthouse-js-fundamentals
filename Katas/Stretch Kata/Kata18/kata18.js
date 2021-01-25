/* Number Guesser

Guessing game where the user has to guess a secret number.
After every guess, the program tells the user whether thier number was too large or small.
Once the game is over, the number of tries should be printed.
Inputting the same number multiple times should only count as one try.
If answer is not a number print an error and don't count it as a try.

- declare a function
- random number generator
*/

let randomNum = Math.floor(Math.random() * 100) + 1 //random number generator 
let prompt = require("prompt-sync")(); // prompt-sync prompter
let count = 0; // attempted try counter
let correct = false;

while (!correct) { //loops until guess matches the random number
  let answer = prompt("Guess a number from 1 - 100: "); // asks for input and stores in answer
  answer = Number(answer); // we make the answer a number
  if (isNaN(answer)) { // isNaN - number checker
    count++; //adds to the counter
    console.log('ok.. this is not a number..')
  } else if (answer === randomNum) { // if guessed correctly, we change the correct value to stop the loop
    correct = true;
    count++;
    console.log(`You done did it!! It only took you ${count} attempts :)`)
  } else if (answer < randomNum) { // if guess is lower than number
    count++;
    console.log('Think higher...')
  } else if (answer > randomNum) {// if guess is higher than number
    count++;
    console.log('ooh you 2 high child');
  }
}