/*

take two arrays and concatenate them into one array

check if it works by using 
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

plan:

//define function called concat with (arr1, arr2)
//make a variable that has an empty []
//make a .map loop that outputs to a new array. *nope*
//make a second .map loop
// return the new array.

*/

// we define a new function that takes two arrays
const concat = (arr1, arr2) => {
  //new array goes here
  let newArr = [];
  //loops first array and pushes into newArr
  for (let arr of arr1) {
    newArr.push(arr);
  }
  //loops second argument array and pushes into newArr
  for (let arr of arr2){
    newArr.push(arr)
  }
  //outside of the loop, we return the brand new array. 
return newArr;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);



// Stretch 
// Take two arrays and make them rearranged in the new array.

const merge = (arr1, arr2) => {
  let newArr = [];
  for (let arr of arr1) {
    newArr.push(arr);
  }
  for (let arr of arr2){
    newArr.push(arr)
  }
return newArr.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ], "=?", [ 1, 2, 3, 4, 4, 5, 6 ]));