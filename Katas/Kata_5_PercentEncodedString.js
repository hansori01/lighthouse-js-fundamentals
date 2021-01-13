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
the for...of loop I thought in my mind should be working */

const urlEncode = text => {
  let array = text.split('');
  for (let elm of array) {
    switch (elm) {
      case ' ':
      elm = '%20';
    }
  }
  return array.join('');
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));