/*

define a function lastIndexOf
When this function is given an (array, value) it should return the 
index of the last time the value occurs int he array. If the value 
never occurs the function should return -1. 

JS has a .indexOf function (which does something similar but you cannot use it for this.


Plan:

//declare the function lastIndexOf(array, value)
//loop through the array backwards.
// every loop, slice the last item (-1) and compare it?
// AHHHHHHH what?!?!?
// Math.max ??

//find length of array.
//slice -1 and compare. to number. with a loop
//every loop, add a number to a var.
//length of array - number added to var. 


// Ok this actually threw me for a HUGE loop..
// I need to work out problem solving skills and making sure I am up to par with logic.


*/
 

// this function will give you the array's index placement of 'num' at it's highest position.
const lastIndexOf = (array, num) => {
  //we loop the array backwards to check
  for (let i = array.length - 1; i >= 0; i--){
    //if we find a match of num and the [index] of the array
    if (array[i] === num) {
      // we return 'i' which is the index number.
      //because this return is inside loop, when it runs, it breaks the function.
      return i;
    }
  }
  // if there are no matches to the 'num' then after loop has finished, we return -1. 
  return -1;
}
//ok this was harder than I thought..
console.log(lastIndexOf([], 3), "=?", -1);


/*

another way to solve this:

function lastIndexOf(array, num){
let foundMatch = false;
let result = 0;
for (let i = 0; i < array.length; i++) {
if(array[i] === num){
result = i;
foundMatch = true;
}
}
if (foundMatch){
return result;
} else {
return -1;
}
}

*/

