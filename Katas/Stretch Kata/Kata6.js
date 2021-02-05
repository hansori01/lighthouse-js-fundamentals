// revisited for W1_d4 stretch

const repeatNumbers = function (data) {
  let str = '';
  for (let elem of data) {
    for (let i = 0; i < elem[1]; i++) {
      str += elem[0]
    }
    str += ', '
  }
  return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));





/* 

Kata 6 - Repeating Numbers

take an array within an array,
each element array will have two values. First will be a number to repeat.
Second will be the number of times the number will repeat.

ie [1,2] = 11
ie [4,6] = 44444


Plan 
 
// create a function repeatNummbers(arr)
// create a loop for the array index
// only one loop is needed as each nested array only has 2 values.
// create a second loop that uses [a,b] value b as stopping condition
// push to an variable into strings.
// return that string variable

// this took way longer than I wanted to. But thanks to Cat for the help. 
*/

// create a function repeatNummbers(arr)


const repeatNumbers = function (data) {
  // variable stores the repeated values in string form.
  let repeat = '';
  // first loop for accessing the elements (arrays)
  for (let i = 0; i < data.length; i++) {
    // variable that holds the [0] value of current [i] element.
    const a = data[i][0]
    // I don't really need this, just a short hand for stopping condition.
    const b = data[i][1]
    // second loop that loops within the nested array. 
    // loop stops when = b (which is the current index' [1] value)
    for (let j = 0; j < b; j++) {
      // adds a to repeat on every loop 
      repeat += a;
    }
    // if the index value or Array we are on is less than the total number of arrays in 'data'
    // conditional is true and adds ', '. If there are no more arrays after, we go to the return.
    if ([i] < data.length - 1) {
      repeat += ', ';
    }
  }
  return repeat;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));