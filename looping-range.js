/*

define a function called range.
  takes 3 interger parameters (start, end, step)
  return an array from start to end counting by step.

for example: 

code	                output
range(0, 10, 2);  	[ 0, 2, 4, 6, 8, 10 ]
range(10, 30, 5);	  [ 10, 15, 20, 25, 30 ]
range(-5, 2, 3);  	[ -5, -2, 1 ]

function should return an empty array [] if given incorrect parameters such as:
start,end,step being undefined
start being greater than end
step being 0 or negative. 

Hint: at some point you may want to use some_array.push(some_value)

To check if it works:

code	output
range(0, 10, 2);	[ 0, 2, 4, 6, 8, 10 ]
range(10, 30, 5);	[ 10, 15, 20, 25, 30 ]
range(-5, 2, 3);	[ -5, -2, 1 ]


PLAN:

declare a function called range
the function takes 3 params, name them
the function holds a variable with an empty array where we push the returned variables.
in the function we do a .map() loop? or do we not because we aren't looping through an array?

*/

//this function outputs an array of numbers that begin at start, stop at end, and logs every iterating step.
function range (start, end, step) {
// count holds the numbers we will return
  const count = [];
// if steps are a negative number, we return an empty array
  if (step < 0) {
    return count;
  }
  else {
// this loop starts at the starting point, then adds the 'step' iteration for every loop.
  for (let i = start; i <= end; i = i + step) {
// we push the outcome every time we loop into the count array
    count.push(i)
    }
    return count;
  }
}


console.log(range(1, 10,-3));


