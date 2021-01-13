/*
Find the sum of the 2 largest intergers within an array.

Plan:

- Find the 2 largest intergers.
  - Loop once, and compare to a 0 in an empty array[0,0]
  - if >, store in the array[0]
  - Do a second loop, same array
  - if < than array[0] && > than array[1], store in the array[1]
- Add the sum of the array[0] and array[1]

*/

const sumLargestNumbers = function(data) {
  //compare values and store to be processed later (sum)
  let newArray = [0, 0];
  // first loop through data array. 
  for (let i of data) {
    // if element in array is > than newArray[0]
    if (data[i] > newArray[0]){
      // we store the data[i] into newArray[0]
      newArray[0] = data[i];
    }
  }
  // second loop through data array.
  for (let j of data) {
      // if element in array is < element from 1st loop && > than newArray[1]
    if (data[j] < newArray[0] && data[j] > newArray[1]) {
      // we store this second largest number into newArray[1]
      newArray[1] = data[j]
    }
  }
  // we return outside of the loops, the sum of the two elements in the newArr.
  return newArray[0] + newArray[1];
}


console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));


//using .sort() Method
// data.sort((a,b) => b-a)

const sumLargestNumbers = data => {
  data.sort((a,b)=> b-a);
  for 
}
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));