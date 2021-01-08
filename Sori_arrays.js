/* 
forEach() loops 

are used to loop through arrays.

A longer way to do this:

declare a function 

myArray= []
function functionName (element, index, array) {
  code goes in here.
}

myArray.forEach(functionName);

We have an array, then we declare a function.
The function can take 3 parameters (element, index, array)
we use .forEach() to run the loop and the function goes into the argument!
.forEach() does not return the array or modify it. for that we use .map()

if this function is only used once, we can define .forEach as an inline function.

donuts.forEach(function(donut) {
  code goes here
});

this becomes an anonymous function and can only be used here.
Don't forget the ending bracket ).

*/


words = ['cat', 'in', 'hat'];
// inline forEach LOOP
// element=word, index=num, array=all
words.forEach(function(word, num, all){
//console will log at index 0, index 1, and index 2. Print 3 messages.
// .toString() is new to me, the all.toString() prints the whole array into string each loop.
  console.log('Word' + num + 'in' + all.toString() + 'is' + word); 
// don't forget to close the () for the forEach.
});

/*
Word0incat,in,hatiscat
Word1incat,in,hatisin
Word2incat,in,hatishat
*/



/*

.map() loops

these loops start with a variable declaration. then we run the 
array with .map(function(element, index, array){}); 
We make sure to return after the execution to be stored in the new array.
(similar to how we declared a variable in a function, then later stored
  results with the return function)


  */

let donuts = ['jelly donut', 'chocolate donut', 'glazed donut']

let newMenu = donuts.map(function(item){
  item += ' hole';
  item = item.toUpperCase();
  return item;
})

console.log(newMenu)