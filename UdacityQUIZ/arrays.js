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