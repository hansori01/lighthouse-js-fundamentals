/* Without using forEach or for loop,
make a function that returns the square of intergers (non negative, non decimal)
*/

const squareList = arr => {  
    return arr.filter(num => Number.isInteger(num) && num > 0). // filters a new array by sorting out decimal / negative numbers
    map(num => num * num);// takes the filtered array, and creates another new array where these numbers are squared.
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);