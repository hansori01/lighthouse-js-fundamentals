/*
I got Bills

use map() to take the bills array
create a second array called totals that show +15% tip added
print totals using console.log
used .toFixed(2) to round the values to a maximum of 2 decimal places.

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];


plan
//declare a new variable and call the bills array with map method and declare a function
// make a variable within funciton to store the tax amount
// add the tax amount to the original item.
// return the function to be stored in the new array.
//print code

*/

var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

const totals = bills.map(function(item){
  let tax = item * 0.15;
  item += tax;
//to.Fixed returns a string. Number() turns into number.
  item = Number(item.toFixed(2))
//map() loops return into a new array.
return item;
});

console.log(totals)



/*
Another Type of Loop (6-8)

use forEach() method to loop over following array, and add 100 to
each of the elements if the value of the element is divisbile by 3.

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

plan:

call the test array using the forEach() method and declare a function
declare a variable that stores the filtered elements to be processed (add 100) ??
if statement that checks modulo by 3 === 0, add 100
return the value

*/

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

//the 'item' parameter tests the if statement by check if item is divisible by 3
//the 'index' parameter is the iterator variable. Each time loop runs, it moves on to the next index
test.forEach(function addHundo(item, index) {
// checking if the value in each element suits the if statement
  if (item % 3 === 0) {
// if true, we take the test array in the [index] number the loop is at. and adds 100.
  test[index] += + 100;
  }
});
console.log(test);

/*
Colors of the Rainbow (6-4)

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

James forgot some of the colours of the rainbow. Help him out to make it to be:

var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]; */


//Plan
//Remove [2] (blackberry) and add (yello , green) in that place
//Add purple in -1

let rainbow  = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1, 'Yellow', 'Green');
rainbow.splice(-1,1, 'Blue', 'Purple')
console.log(rainbow)



/* 
Quidditch Cup (6-5)
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", 
"George Weasley", "Fred Weasley", "Harry Potter"];


Create a function called hasEnoughPlayers() that takes the team array as an
argument and returns true or false depending on if the array has at least seven characters.*/

//plan
//create function named hasEnoughPlayers() 
//if statement. Check if length of array >= 7
// return true
//else return false
//log to console (hasEnoughPlayers(team))

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", 
"George Weasley", "Fred Weasley", "Harry Potter"];
//create function named hasEnoughPlayers() 
const hasEnoughPlayers = (array) => {
//if statement. Check if length of array >= 7
if (array.length>= 7) {
  return true;
} 
  return false;
}
console.log(hasEnoughPlayers(team));




var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
console.log(turnMeIntoAString.join())