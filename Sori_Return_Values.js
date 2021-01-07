/* Return != Print or Log. 
console.log can be used for debugging, but doesn't have effect on the user 
*/


//This prints something different than the return string.
function isThisWorking(input) {
  //this is what prints for us to see in terminal
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
  // the first return exits the function
  return "this will not return as the above return stops the function!";
  //this return stops the function and also returns the string.
  //w/o this return the function still prints, but returns: undefined.
}
isThisWorking(3);



/*We are using a function that returns a value.
Then using that returned value for another function. */

//add() adds x and y and returns value.
function add(x, y) {
  return x + y;
}
// divideByTwo() takes a number and divides by two
function divideByTwo(num) {
  return num / 2;
}
// the return of add() gets stored into the 'sum' variable.
let sum = add(5, 7);
// 'sum' variable is used within the second function as an argument.
let average = divideByTwo(sum); 
//i legit thought things were broken cuz the log was missing..
//how do I show return on vs code?!?
console.log(average);

/*
the exercise was to show return being used in a var, but
the above code can be written as this as well.

function average(x , y){
  let sum = x + y;
  return sum / 2;
}
console.log(average(2,4));
*/



/* SHADOWING - 

we skip over to a bit of scope.
This seems a bit like 'understand how to be dumb like a computer'
kidn of situation. Shadowing explained below. */

// a variable has be declared that x is 1.
let x = 1;

// a function delcared that +2 to x.
function addTwo() {
/* value of x changes. Because we don't use 'let' computer 
refers to the previous declared 'x' and changes that value */
  x = x + 2;
  return x
}
// function executes and changes value of X!
//even when it is in a different scope :o
addTwo();
console.log(x);


//above changes by adding 'let' to declare x in the function dec.
/* for some reason this code doesn't run because
it won't let me use x+2 in decaring the second time.. why?*/
/*let */ var x = 1;

function addTwo() {
 /* let */ var  x = x + 2;
}
addTwo();
console.log(x);
// ?? is this the diff between let and var?

