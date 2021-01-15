function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(length) {
  let triangle = '';
  for (let i = 1; i<=length; i++){
    triangle += makeLine(i);
  }
  return triangle;
}

console.log(buildTriangle(10));

/* REVIEW THIS!!

For this quiz, you're going to create a function called buildTriangle() 
that will accept an input (the triangle at its widest width) and will return 
the string representation of a triangle. See the example output below.

buildTriangle(10);

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * * 

We've given you one function makeLine() to start with. The function takes in a line length,
 and builds a line of asterisks and returns the line with a newline character.

 function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}



Plan the algorithm:

- the above function returns a single line of '*' multiplied by (length)
- (length) will need to be part of the next function declared..?
- new function called buildTriangle(length)
- declare a variable where the triangle gets stored
- there is a loop starting from 1 all the way to length with 1 increment.
- declare a loop variable for number of lines that matches 'length'
- everytime loop runs, add astericks which is makeLine(linenumber)
- the linenumber argument needs to change every loop according to line size.
- return triangle
- log the triangle.

***I had a really difficult time trying to grasp this.
Maybe wrestled with it for an hour.. mostly staring blankly trying to
figure it out. I will write out detailed notes to make sure I understand this.
*/




/* Declare a function with a return value that will get used
in a second function.
First function will make a line of '*' with the number of (length) 
parameter. */
function makeLine(length) {
// bank for the '*' to get stored in.
  var line = "";
// loop to print and add '*' to the above bank called 'line'
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
// returns the line after the loop then adds a line break.
  return line + "\n";
}


// this function will use the above function to return a consecutive log of '*'
// the stars will grow as the loop conditions will be set as the length of makeLine(length)
function buildTriangle(length) {
//this is where we store the asterick triangle
  let triangle = '';
// standard loop starting at 1 and going until it reaches the argument.
  for (let i = 1; i<=length; i++){
/* connects this function to the previous function.
since makeLine makes a line of '*' with an argument number,
the argument is set as (i) which is the iterator variable.
so if the loop runs 5 times, i = 5. Which makes the first function
run consecutively every time */
    triangle += makeLine(i);
  }
// returns triangle once the loop finishes running
  return triangle;
}

console.log(buildTriangle(10));


/* additional practice. I am going to try to make this 
with a while loop*/

/* plan:

1st function uses a loop and makes a line of astericks w/ line break.

2nd function uses a loop that correlates the iterator value, to the number
of astericks it will make. 
*/

//declare function with a parameter that outputs a number of astericks
function starLine(length){
// declare variable where the line will get stored.
let line = '';
// a loop to store the amount of astericks that gets called.
let j = 1;
while (j <= length){
  line += '*';
  j++
}
// after the loop return the astericks to the variable declared. add line break.
return line += '\n'
}

//second function that we call to build triangle. ask for number to set size of triangle.
function triangle(length){
// declare a variable where the triangle gets stored.
let starTri = '';
// declare a loop initial state
let i = 1;
// while loop until length of argument/parameter
while (i <= length) {
// every time loop runs it will store the line of astericks. the length will be determined by the row we are on.
starTri += starLine(i);
// iterate ++
i++;
}
// once loop is done return triangle
return starTri;
}
// log the triangle.
console.log(triangle(10));

/* personal feedback:
ok - I wouldn't have been able to get this by myself,
but I kinda understand this concept. I really enjoyed
writing out the plant, turning them into comments.
this helped avoid any missed code, and helped me stay on track */