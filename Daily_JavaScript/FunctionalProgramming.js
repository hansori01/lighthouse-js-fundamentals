/* Without using forEach or for loop,
make a function that returns the square of intergers (non negative, non decimal)
*/

const squareList = arr => {  
    return arr.filter(num => Number.isInteger(num) && num > 0). // filters a new array by sorting out decimal / negative numbers
    map(num => num * num);// takes the filtered array, and creates another new array where these numbers are squared.
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);


  //returning a sorted array without changing the original array
  //*functional programming stays within scope and doesn't mutate outside variables

  var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return arr.slice().sort((a, b)=> a - b)
}
console.log(nonMutatingSort(globalArray));


// currying using arrow function

const add = x => y => z => x + y + z;
console.log(add(1)(2)(3))

// above uncurried would be:

const add = (x,y,z) => x + y + z;
console.log(add(1,2,3))

//useful if you can't supply all the arguments to a function at one time.