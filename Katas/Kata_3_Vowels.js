/*

Count then number of vowels that appear in a string.
a e i o u - vowels


plan:
// a storage variable where string is split into elements.
// loop through that element.
// check every element, is this a/e/i/o/u?
// if so, letters.push(data[i])
//return letters.length;
*/

// for some reason, for...of loops don't work! ??

// this function counts number of vowels in a string
const numberOfVowels = function(data) {
  const letters = [];
  for (let i = 0; i < data.length; i++) {
    // condition to check vowels the long way
    if ((data[i] === 'a') || (data[i] === 'e') || (data[i] === 'i') | (data[i] === 'o') || (data[i] === 'u')) {
      letters.push(data[i]);
    }
  }
  // returns the length of letters array.
  return letters.length;
};
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));


  //I'm going to try to write the above using switch statement.
// YES!! IT WORKED :) :) :).
//This code looks so much better! and used For...of loop 
//remember.. in for...of loop the iterator is not the index number or an ACTUAL number.
  const numberOfVowels = data => {
    let letters = [];
    let newArr = data.split('')
    for (let char of newArr) {
      // no [] in char because char is a number, not an index.
      switch(char){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          letters.push(char)
      }
    }
    return letters.length;
  }
  console.log(numberOfVowels("orange"));
