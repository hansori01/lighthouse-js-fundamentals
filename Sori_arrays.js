/* 
forEach() loops 

are used to loop through arrays.

A longer way to do this:

declare a function 

myArray= []
function functionName (element, index, array) {
  code goes in here.
}

myArray.forEach(functionName);

We have an array, then we declare a function.
The function can take 3 parameters (element, index, array)
we use .forEach() to run the loop and the function goes into the argument!
.forEach() does not return the array or modify it. for that we use .map()

if this function is only used once, we can define .forEach as an inline function.

donuts.forEach(function(donut) {
  code goes here
});

this becomes an anonymous function and can only be used here.
Don't forget the ending bracket ).

*/


words = ['cat', 'in', 'hat'];
// inline forEach LOOP
// element=word, index=num, array=all
words.forEach(function(word, num, all){
//console will log at index 0, index 1, and index 2. Print 3 messages.
// .toString() is new to me, the all.toString() prints the whole array into string each loop.
  console.log('Word' + num + 'in' + all.toString() + 'is' + word); 
// don't forget to close the () for the forEach.
});

/*
Word0incat,in,hatiscat
Word1incat,in,hatisin
Word2incat,in,hatishat
*/



/*

.map() loops

these loops start with a variable declaration. then we run the 
array with .map(function(element){}); 
We make sure to return after the execution to be stored in the new array.
(similar to how we declared a variable in a function, then later stored
  results with the return function)


  !! maps only take one argument. This argument accesses each element in the array.

  */

let donuts = ['jelly donut', 'chocolate donut', 'glazed donut']

let newMenu = donuts.map((item) => {
  item += ' hole';
  item = item.toUpperCase();
  return item;
})

console.log(newMenu)



/* 

Looping arrays within arrays.
*/

let donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

//we can loop the 3 arrays (each with 3 elements in that nested array)

// a for loop that goes through the outer arrays.
for (let i=0;i<donutBox.length;i++){
// everytime it loops, we log the element that the [i] value is on
  console.log(donutBox[i])
}

/* Prints: 
[ 'glazed', 'chocolate glazed', 'cinnamon' ]
[ 'powdered', 'sprinkled', 'glazed cruller' ]
[ 'chocolate cruller', 'Boston creme', 'creme de leche' ]
*/

//We can write the above as:

for (donut of donutBox){
  console.log(donut)
}

//or

donutBox.forEach((donut)=> {
  console.log(donut)
})

// We make a loop within a loop to access the nested arrays and print those separately
// r = row and c = coloum
for (let r=0;r<donutBox.length;r++){
// everytime the r loop runs, it goes through each of the 'columns'. the donutBox[r]
// is a bit confusing right now..
  for (let c=0; c<donutBox[r].length; c++){
// each time the loop runs, we log the donutBox element located in the loop value [r][c]
    console.log(donutBox[r][c])
  }
}


/*
the donutBox[r] in the nested loop is throwing me off a bit.
I thought that maybe if the column loop runs when it is less than the length of [r]
which, in this case would be '2'. So I thought that that 'bland' donut wouldnt run..
I thought it may only work in a 3x3 grid of equal column and row.
But it still works and prints uneven amount of elements in the nested array.
Hopefully I can find the answer to why!

*/

let donutBox = [//this isn't an even grid like before.
  ["glazed", "chocolate glazed", "cinnamon", 'bland'],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];
//same loop within loop syntax. I didn't think it would print 'bland' but it did. 
for (let r=0;r<donutBox.length;r++){
  for(let c=0; c<donutBox[r].length; c++){
    console.log(donutBox[r][c])
  }
}//why..?

