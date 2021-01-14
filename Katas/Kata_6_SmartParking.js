/* https://web.compass.lighthouselabs.ca/prep/prep/activities/1135

Make a smart parking algorithm that takes in available parking / type of car
- type of car determines where you can park
- if true, there are available spots for the type of car
  - where is that spot in [x,y] co-ordinates.
- if false, lets you know 'false' and cannot fit your type of car / no spots available.

*/



// define the function whereCanIPark(spots, vehicle)
const whereCanIPark = (spots, vehicle) => {
  // loop within a loop to access all the elements
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      //trick taught by Cat - declare a spot variable to keep if conditional cleaner
      const spot = spots[y][x]
      // check for S which fits a small and motorcycle
      if (spot === 'S' && (vehicle === 'small' || vehicle === 'motorcycle')) {
        return [x,y]
      }
      // check for R which fits all vehicles. Earlier version has conditionals that checked the vehicle type
      // but whichever vehicle gets added passes through this.
      else if (spot === 'R') {
        return [x,y]
      }
      else if (spot === 'M' && vehicle === 'motorcycle') {
        return [x,y]
      }
    }
  }
  return false;
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))


/* Ahemd Tarabia has a different approach.
he emphasizes being able to test code as he goes through. Here is his solution: */

const whereCanIPark = function (spots, vehicle) {
  let place = [];

  // more for loops, but this way he can check if everything in his code works step by step
  // this checks for regular which has the least amount of conditions.
  if(vehicle === "regular") {
    // this loop only runs if the if statement is valid
    for(i = 0; i < spots.length ; i++) {
      for (j = 0; j < spots[i].length; j++) {
        // a nested if statement that checks the second conditional with the loops.
        if(spots[i][j]==="R") {
          return place = [j,i];
        }
      }
    }
    return false;
  }
  else if (vehicle === "small") {
    for(i = 0; i < spots.length ; i++) {
      for (j = 0; j < spots[i].length; j++) {
        if(spots[i][j]==="R"  spots[i][j] === "S") {
          return place = [j,i];
        }
      }
    }
    return false;
  }
  else if (vehicle === "motorcycle") {
    for(i = 0; i < spots.length ; i++) {
      for (j = 0; j < spots[i].length; j++) {
        if(spots[i][j]==="R"  spots[i][j] === "S" || spots[i][j] === "M") {
          return place = [j,i];
        }
      }
    }
    return false;
  }
};


/* I'm going to practice this one again after watching the video.
He goes over console.log to check progress as he goes on.
Which I will try to implement */


const whereCanIPark = (spots, vehicle) => {
  // we will do a loop and print element in the parent array. y = rows.
  for (let y = 0; y < spots.length; y++) {
   // console.log(spots[y])
   //console log to check progress. Prints out element arrays properly.
   // nested loop to now access the elements within the nested array.
   // spots[y].length because we want to go the length of the array in the [y] index
   for (let x = 0; x < spots[y].length; x++){
     //console.log('spot:' + spots[y][x])
     // we successfully logged each element within the nested array.
     // spots[y][x] = y is the index of parent array. x is the index of smaller array.
     //to shorten code, we are going to make a variable for spots[y][x] to refer to
    const spot = spots[y][x];
    if (vehicle === 'regular') {
      if (spot === 'R') {
        return [x, y]
      }
    }  else if (vehicle === 'small') {
      if (spot === 'R' || spot === 'S') {
        return [x, y]
      }
   }  else if (vehicle === 'motorcycle') {
    if (spot === 'R' || spot === 'S' || spot === 'M') {
      return [x, y]
    }
  }
   }
  }
  return false;
}
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));