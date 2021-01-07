/*

Quiz Inline (5-6)

Call the emotions() function so that it prints the output you see below,
but instead of passing the laugh() function as an argument,
pass an inline function expression instead.

emotions('happy', laugh(2)); // you can use your laugh function from the previous quiz.
// prints: 'I am happy, haha!'

*/

//declare function emotions with a string parameter and a function parameter
function emotions(myString, myFunc) {
// emotions() logs I am + string + and whatever is output by myFunc(2) <-- so the argument function takes an argument too
  console.log('I am ' + myString + ', ' + myFunc(2));
}
// call the emotions() function. Happy as 'myString' argument. function(num) as the second argument.
emotions('happy', function(num) {
  let tickleTrunk = '';
      for(let i = 0; i < num ; i++){
        tickleTrunk += 'ha';
      }
      tickleTrunk += '!';
      return tickleTrunk;
      // the ) bracket below is because the whole function is an argument.
  });



/*

Quiz Cry (5-5)

Write a named function expression that stores the function in a variable called cry and returns 'boohoo!'.
don't forget to call the function using the variable name, not the function name.

plan - 

//anonymous function called 'cry()'
//declare sob variable to store the strings
// return values of sob within the function
//call function with the variable name cry()

*/

//anonymous function called 'cry()'
let cry = function() {
//declare sob variable to store the strings
let sob = 'boohoo!';
return sob
}
//call function with the variable name cry()
cry()



/*

Quiz Laugh (5-4)

Write an anonymous function expression that stores a function in a variable called 'laugh'l
and outputs the number of 'ha' that you will pass in as an argument.

ex. laugh(3);

*/


/* plan


//declare a variable and declare a function inside it. name it laugh.
//declare a variable where the strings will get stored
// run a for loop which starts at 1/ ends when >= (arugment) with ++
// within the loop the code that runs is a return that adds the ha's to the variable.
// call the function using laugh(argument)

*/
//declare a variable and declare a function inside it. name it laugh.

var laugh = function(num) {
//declare a variable where the strings will get stored
let tickleTrunk = '';
  // run a for loop (don't forget to declare var i ㅠ.ㅠ) which starts at 1/ ends when >= (arugment) with ++
    for(let i = 0; i < num ; i++){
// within the loop the code that runs is a return that adds the ha's to the variable.
      tickleTrunk += 'ha';
    }
    tickleTrunk += '!';
    return tickleTrunk;
}
// call the function using laugh(argument)
console.log(laugh(10));