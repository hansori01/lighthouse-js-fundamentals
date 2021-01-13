/* 

Add only the numbers int he arra which match the given condition.

// Create a function named conditionalSum(array, condition)
// a var num that holds a 0 where the numbers will get stored in the final loop
// first loop using for...of loop
// if the number % 2=== true, it is even / if false, then odd
// add those numbers in the var num
// final loop returns the sum of all the numbers in the array

*/


// Create a function named conditionalSum(array, condition)
const conditionalSum = (array, condition) => {
  var num = 0;
  for (i of array) {
    if (condition == 'even' && array[i] % 2 === 0) {
      num += array[i]
    }
    else if (condition == 'odd' && if (array[i] % 2 !== 0) {
      num += array[i]
    }
    return num;
  }
} 



console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
// a var num that holds a 0 where the numbers will get stored in the final loop
// first loop using for...of loop
// if the number % 2=== true, it is even / if false, then odd
// add those numbers in the var num
// final loop returns the sum of all the numbers in the array