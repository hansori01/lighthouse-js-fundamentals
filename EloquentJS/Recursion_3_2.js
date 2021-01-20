/*
pg 56
Make a program that checks if a number is even.
0 = even
1 = odd
for any number 'N', the evenness is same as N-2
  (means keep subtracting -2 in recursion until you reach 1 or 0)

*/


function isEven(n){
  // notice the lack of {} braces in these if statements
if (n===0) return true;
else if (n===1) return false;
// if negative number, we turn it to a positive number and recurse.
else if (n<0) return isEven(-n);
// this takes the number and continuously subtracts 2 until = 0 || 1
else return isEven(n-2)
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
