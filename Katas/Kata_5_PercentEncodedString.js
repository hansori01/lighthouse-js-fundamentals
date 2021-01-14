/*

take a string in a function and replace any space ' ' with '%20'
this is what happens to urls incase a search includes spaces. It is
replaced with %20 which indicates a placeholder of ' ' space.

plan - 

// create a function within a const variable named urlEncode
// create a variable with an empty array that will hold the new array
// create a variable which turns the string into an array using .split('')
// loop through the string
// switch case. If an element = ' ' the element is now '%20'
// return the new array with .join().

*/

const urlEncode = text => {
  let array = text.split('');
  for (let elm = 0; elm < array.length; elm++) {
    if (array[elm] === ' ') {
      array[elm] = '%20'
    }
  }
  return array.join('');
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));




/* This for some reason isn't working.. 
the for...of loop I thought in my mind should be working 
Fred Lavoie helped - the 'elm' variable only lives as long as the individual loops.
So after the loop runs the %20 isn't accessible outside of that loop scope.
*/

const urlEncode = text => {
  let array = text.split('');
  //because for...of loop's iterator variable only exists within the loop scope, 
  // store the new string into a new variable.
  let url = '';
  for (let elm of array) {
    switch (elm) {
      case ' ':
      elm = '%20';
    }
    //within the loop, log the characters and the newly transformed character. 
    url += elm
  }
  return url;
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
