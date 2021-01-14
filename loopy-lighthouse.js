/*
LoopyLighthouse exercise. Using a loop syntax, I had to print numbers from 100 to 200 with conditions.
The struggles I had at first was trying to do a for(i%3===0 && i%4===0)
to try to include logical operators into the the for. I tried ALL the different brackets and was unable to make it work.
Then I realized that I can do the same thing I am looking to do with a nested if statement.
completed in 31:29

below is how my code looked as I was trying to juggle things and figure out where things go.
Initially I had the nested if statement come after the if(i%3) which made any (i%3) values bypass.
The nested if had to come first to check those conditions.

for (let i = 100; i <=200; i++){
 if (i % 4 === 0){
    if(i % 3 === 0) {
     console.log('LoopyLighthouse');
       } else {
           console.log('Lighthouse');
            } 
          } else if(i % 3 === 0){
                console.log('Loopy');
   } else {
     console.log(i);
   }
  }
*/

//Prints nubmers 100 to 200 with conditions.

for (let i = 100; i <= 200; i++) {
  if (i % 4 === 0) {
    if (i % 3 === 0) {
      console.log('LoopyLighthouse');
    }
    else {
      console.log('Lighthouse');
    }
  }
  else if (i % 3 === 0) {
    console.log('Loopy');
  }
  else {
    console.log(i);
  }
}



/*
Here is the stretch execirse of Loopy-Lighthouse 2 

wrap the above code into a function called loopyLighthouse(range, multiples, words)
range - array of 2 numbers represents the start and end values for loop
multiples - array of 2 numbers representign the multiple you want to replace with words
words - array of 2 strings representing the words that replaces these numbers.

*/

function loopyLighthouse (range, multiples, words) {
  for (let num = range[0]; num <= range[1]; num++) {
    if (num % multiples[0] === 0 && num % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    }
    else if (num % multiples[0] === 0) {
      console.log(words[0]);
    }
    else if (num % multiples[1] === 0) {
      console.log(words[1]);
    }
    else {
      console.log(num);
    }
  }
  return;
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);




/* this was Jesse Daoust's answer.