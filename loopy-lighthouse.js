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
  if (i % 4 === 0 ) {
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
