/* 

*****

HEAD DOWN BELOW AND REVIEW anonymous inline FUNCTION! 

***** 

*/



//BASIC FUNCTION.. notice the lack of return!
function sayHello() {
  var message ='Hello';
}
console.log(sayHello());
// undefined

/* we can store the console.log if we want to print 
'Hello' every time we run this function.if we want to use the 
string to concatenate or other reasons, we simply return it.
*/

function sayHello() {
  let message = 'Hello';
  return message;
}
console.log(sayHello());
//Hello
// I am not super sure why we have to return in function..


//BASIC CALCULATION using FUNction
function calcArea(width,height){
  let totalArea = width * height;
  return totalArea;
}
console.log(calcArea(25,100345));
/* Ok I am getting the hang of this.. keep practicing<3

the RETURN value seems like a good clue to what 
this function is all about. It's the OUTCOME of the function.
*/



//Udacity exercise.
/* Declare a function called laugh() that returns 'hahahahahahahahahaha!'
Print the value returned from the laugh() function to the console */

function laugh() {
  let chuckle = 'hahahahahahahahahaha!'
  return chuckle;
}
console.log(laugh());
//basic function.


/*
Udacity exercise.

Write a function called laugh() that takes
one parameter (num) that represents the number of "ha"'s to return.
tip: you may need a loop for this 

plan: laugh(num) 
- return is chuckle
- loop to add how many ha. or can we use* 
*/

let sound = ''
//global scope. Empty string bank where the 'ha's will get stored.
function laugh(num) {
//declaring function laugh with param of num.
  for (let i = 0; i < num; i++){
// this loop runs from 0 to -1 of the num argument.
//I can also do (let i=num ; num>0; num--);
    sound += 'ha';
  }
//every time loop runs, 'ha' is added to the sound variable.
 sound = sound + '!';
//once loop is done, the function adds ! to sound. (this is a local variable)
  return sound;
}
// return sound, so the function will show the outcome.
// This is returning the global (looped bank) then the local sound (!)
//will anything change if I use const? Yep. didn't work. Use let so we can access globally and locally.
console.log(laugh(1))

//this took a bit longer than I want to admit to figure out..
//here is same thing with a while loop for practice.

function laughing(num) {
    let chuckle = '';
    while (num >0) {
      chuckle += 'ha';
      num--;
    }
    chuckle = chuckle + '!';
    return chuckle;
}

console.log(laughing(20))

/*this was a complete opposite of how I thought. This uses the num variable
in the iterator expressions. Stops when num reaches zero, and 
it decreases in value. I had it set so it increases value until num-1. 
This seems a bit more simpler and straight foward than the for loop */



//FUNCTION with a LOOP

// reverse a set of strings using a function and a loop.

function reverseString(reverseMe) {
//declares a function named reverseString with a parameter (reverseMe)
  let reversed = "";
// we declare the variable reversed where the returned output will be placed.
  for (let i = reverseMe.length - 1; i>=0; i--) {
// start at -1 of the length of the parameter string. Run until 0 index. And decrease in value.
    reversed += reverseMe[i];
  }
// each time the loop runs, it stores the letters backwards into the once empty variable bank.
  return reversed;
}
// we have to return values in function. for some reason. I'm sure I'll know why soon.

console.log(reverseString('She done already done had herses'));
/*the argument now replaces the parameter.
we are running the reverseString which has a loop built into return the letters going backwards.
the parameter reverseMe is replaced with my name, the argument.
<3 good practice <3 */



/* Prime number checker using function + loop
Prime - whole number >1 with only two factors (two numbers it divides into)
Composite - nubmers with more than 2 factors. 
          - all even numbers except 2 are composite numbers.
2 is the only even prime number.
Example: 11 = factors are only 1 and 11. 
12 =  facts are 1, 12, 2,3,4,6

I saw this code in explaining console.log vs return
I wanted to dissect it so I understand this concept */

//declaring a function called isPrime. Parameter is interger (whole number)
function isPrime(interger) {
/*loop starts at 2 (as divide by 1 only declares composite.)
loop runs until -1 of interger. Increments by one */
  for(var x = 2; x<interger; x++){
/* if the argument number divides by a whole number >1 without, the
if condition is true (is Prime). However this only records the 
first factor it finds. Which coudl be 2 for all even numbers >2. 
it also returns the false because interger is NOT prime but is a composite number.*/
    if(interger % x === 0) {
      console.log(interger + ' is divisible by ' + x);
      return false;
    }
  }
    return true
  }
console.log(isPrime(12));

/* once the function hits the return statement, 
it stops running the function. Return statement stops it.
Is it like the break; in switch statement? 
w/o the return the loop would run until it reaches the end
however, it wouldn't return the 'false' value. confusing...*/


/*
Is this the same idea as the above?
Above puts the return true outside of the if statement.
It's acting like an implicit else, but becaseu it is one scope outside
of the if statement?
Interesting. I wonder which one is preferred... 
function isPrime(interger) {
for(var x = 2; x<interger; x++){
      if(interger % x === 0) {
        console.log(interger + ' is divisible by ' + x);
        return false;
      }
      else {return true}
    }
    }
 
  console.log(isPrime(11));

  */



// Function Expression

/*Function Expressions, where functions are stored in variables are handy
as these are not hoisted. Only runs when called or executed.
You can see the similariy, minus the name of the function - since there is already a name of variable */
 let catSays = function(max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

console.log(catSays(5));

//Function as Parameters

/*A function that is passed into another function is called a callback.
See below */

//func. expression - catSays
let catSays = function(max) {
  let catMessage = '';
  for (let i=0; i<max; i++){
    catMessage += 'meow ';
  }
  return catMessage;
  }
// function declaration helloCat accepting a callback
  function helloCat(callbackFunc) {
    return 'Hello' + callbackFunc(3);
  }
  // pass in catSays as a callback Function.
helloCat(catSays);
 console.log(helloCat(catSays));



 // INLINE FUNCTION EXPRESSION

 /* this was a hard concept to understand last night, but after taking a break
 it seems so much clearer to me.

 We are calling a function (like a parent function almost) and within the parameter,
 the argument is ANOTHER function! The 1st example shows the messageFunction (favoriteMovie)
 get declared outside of that. But we can also shorten the syntax by declaring the function
as we call the 'parent' function in the argument.

*/

// this function prints a message + movieName which is set as the parameter.
 let favoriteMovie = function displayFavorite(movieName) {
   console.log('My fav movie is ' + movieName);
 }

 // this function has two parameters. One where the 'messageFunction' goes in. and One for a name.
 function movies(messageFunction, name) {
// this function's job is to turn the 'name' parameter as a value for the 1st parameter.
// when we call 'favoriteMovie' later, the (name) becomes (movieName)
   messageFunction(name);
 }
//we call the second function.
// 1st parameter is displayFavorite(movieName) function.
// we know that the 'parent' function turns the second argument into a function argument for the 'child' function.
// this is hella confusing but I think will become clearer as I find actual practical uses for this.
 movies(favoriteMovie, 'Nemo');



 /* 
 
 We are now going to do the exact same thing as above,
 but save a few lines of code.
 With an inline function, we are DECLARING the favoriteMovie function
 when we call the 'movies' function. So we can declare and call a function
 when it is being used as an argument.
                                           */


 //ANONYMOUS INLINE FUNTION
 // We use this for functions that won't get used later.
 // This saves data and keeps the SCOPE of function tighter.

// we are declaring 'movies' function - I think of this as the 'parent' function.
 function movies(messageFunction, name) {
// this function turns the second parameter as a parameter for the function that is used as first argument.
   messageFunction(name);
 }

 // we call this 'parent' function. In the first argument we declare a NEW function, 'displayFavorite'
 movies(function displayFavorite(movieName) {
// this inline function prints a string and adds a movieName argument.
   console.log('My favorite movie is ' + movieName);
// because the 'parent' function transforms the second argument into an argument for the 1st function
// this argument below gets slotted into (movieName) parameter.
 }, 'Neemo');
// the ')' confused for so much last night. but I see it now. We are finishing the movie function!