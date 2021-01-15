/*

Kata 8 Multiplication Table

Print multiplication table to the console. 
We will take one parameter of maxValue.
the argument number will determine the highest value of
our multiplication table. 

console.log(multiplicationTable(5));
returns: 

1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25 

*/





const multiplicationTable = (maxValue) => {
  let numbers = '';
  //loops through 1 to maxValue
  for (let i = 1; i <= maxValue; i++) {
    // a second loop from 1 to maxValue
    for (let j = 1; j <= maxValue; j++) {
      // we add i*j to the numbers string (keep the previous value)
      numbers = numbers + ' ' + (i * j);
    }
    //if the j value ( end of second loop. so 1*10 for example, before going to 2*1 add linebreak)
    if ((j) = maxValue) {
      numbers = numbers + '\n';
    } else {
      // if still looping to the j loop, nothing changes.
      numbers = numbers
    }
  }
  return numbers
}
console.log(multiplicationTable(10))




let join = [1, 2, 3, 4, 5]
console.log(join.join(''))




/* 

my original plan below did not work.
I wanted to make 2 arrays. then do a for loop
to multiply array 1 with array 2.
I couldn't figure out how to multiply one array to another
within a loop.. why? */

const multiplicationTable = (maxValue) => {
  // 'multiply' empy [] to push an array of numbers.
  let multiply = [[], []];
  let number = 1;
  let table = [[],[]]
  for (let arr = 1; arr <= maxValue; arr++) {
    multiply[0].push(arr);
    multiply[1].push(arr);
  };
  for (let i = 0; i < multiply[0].length; i++) {
    for (let j = 0; j < multiply[i].length; j++) {
table.push(number*[i][j])
    }

    return table;
  }
}
console.log(multiplicationTable(5))
[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

console.log('number ' + ((i + 1) + (j + 1)))





