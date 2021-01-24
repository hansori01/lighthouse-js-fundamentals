/*reverseArray  
//take an array and produce a new array with inverse order



reverseArrayInPlace
//takes the array and reverses the order without creating an array

*/


const reverseArray = arr =>{
  let newArr= [];
  for (let i=arr.length-1; i>=0; i--){
    newArr.push(arr[i])
  }
  return newArr;
}

console.log(reverseArray(['a','b','c','d']))


//??
//this takes a loop and only loops halfway
//replaces first with last, second with second last..
//i don't FULLY understand what is going here. Will come back.
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArrayInPlace(['a','b','c','d']))
