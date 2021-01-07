/* 


implement a function called 'finalPosition(moves)'
- it will calculate the position of the parade on an array of directional moves.
- it will move on xy grid.
- function will receive an array of moves. it'll be strigns that say 'north, south, west or east'.
- first element of array should be x position and second should be y.
- parade beings at [0,0]

if we called the function with following arguments:
const moves = ['north', 'north', 'west', 'north', 'east', 'north']

the finalPosition function should return the array [-1, 4]

*/

/* plan

parade starts at x = 0 / y = 0.
const north = y + 1
const south = y - 1
const west = x - 1
const east = x + 1

if west or east it gets logged to array [0]
if north or south it gets looged to array [1]


//declare a const 'moves' that stores the movement of parade in array.

//declare a function named finalPosition(moves)
//
//function should return ____ in an array

*/

//Array records the path the parade took
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

// This function takes the 'moves' array and determines the final position on grid.
const finalPosition = function (moves) {
// this variable stores the coordinates once the loop runs. Axis in array = [x, y]
  let coOrd = [0, 0];
// a loop that works through the array 'moves'
  for (const move of moves) {
// 4 if statements determines where the direction logged will get stored in 'coOrd' [x, y]
// this block logs all moves 'west' as -1 on the x axis
    if (move === 'west') {
    coOrd[0] -= 1;
    }
// this block logs all moves 'east' as +1 on the x axis
    else if (move === 'east') {
      coOrd[0] += 1;
    }
// this block logs all moves 'north' as +1 on the y axis
    else if (move === 'north') {
      coOrd[1] += 1;
    }
// this block logs all moves 'south' as -1 on the y axis
    else if (move === 'south') {
      coOrd[1] -= 1;
    }
  }
// coOrd is returned so the function can determine the final position of the parade.
  return coOrd;
}