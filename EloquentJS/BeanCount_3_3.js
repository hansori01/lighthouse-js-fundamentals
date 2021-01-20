/*

write a function that takes a string as an argument
returns a number that indicates how many uppercase "B" are in string.

*/


function countBs(string) {
  let count = 0;
  for (let char = 0; char<=string.length; char++){
    if (string[char] === 'B') {
      count += 1;
    }
  }
  return count;
}

console.log(countBs('Hello my name is BOB and i Bring you some bacon'))

/* write a second function countChar
similar to countBs, except second argument
indicates the character that is to be counted.
Rewrite count Bs to make use of this new function
*/

function countChar(string, letter) {
  let count = 0;
  for (let char = 0; char <=string.length; char++) {
    if (string[char] === letter) {
      count +=1;
    }
  }
  return count;
}


//re-write of countBs() that makes use of countChar()

function countBs(string) {
return countChar(string, 'B')
}

console.log(countBs('hello BOb you are BRINGING Bacon bish Bai'))