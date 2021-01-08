/*

Canada is sending space ships of maplesyrup at 100 bottles per spaceship..
Container only sent when it is full.
We will write a function that determines how many hundreds can be made froma   number.


when this function is given a number, it should return how many hundreds fit in.
So basically Num/100 = 
if the number doesnt fully fit into hundred it doesn't count.


//define a function called howManyHundreds()
// To see how many hundreds fit into a number, 
we need to divide num/100. For example 2939/100 = 29.39.
Since this is by 100 we can round this down and get an interger.
Or we can find the modulo /100 which will reproduce the amount we want to subtract
*/

// this function will calculate how many hundreds are in a number
const howManyHundreds = function (num) {
// x determines num divided by hundred
  let x = num / 100;
// y is the modulo of num by 100 and divided by 100 - it ouputs the left over value we don't need.
  let y = (num % 100) / 100;
  let z = x - y; 
    return z;
}

console.log(howManyHundreds());


// checking to see if this works with other numbers
const other = function (num) {
  let a = num / 23;
  let b = (num %23) / 23;
  let c = a - b;
  return c;
}

console.log(other(77))

// this is a simpler way - we just divide the number by what we are looking ofr
// use math.floor to round down. 
const theother = function (num) {
  let a = num / 23;
  a = Math.floor(a);
  return a;
}
console.log(theother(1331));



const howManyHundreds = function (num) {
    let x = num / 100;
    let y = (num % 100) / 100;
    let z = x - y; 
      return z;
  }
  
  console.log(howManyHundreds());