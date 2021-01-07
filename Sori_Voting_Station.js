/* 

Compass Activity:

Where will citizens of codeville vote?

We will write a chooseStations(stations) function
that takes in an array of possible voting stations.
Only returning the names of the stations that are appropriate.

- complete the logic in the function chooseStations.
- your function will receive an array of stations where each station
itself is an array with a name, capacity and venue type.
- to be deemd appropriate, it must have a capacity of >=20 and
be a SCHOOL or COMMUNITY CENTRE>
- we can initialize a new array within our function
  let goodStations = [] and PUSH the stations as we loop.

  here are the arguments in array.

  const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);

the results should return:

['Bright Lights Elementary', 'Moose Mountain Community Centre']
*/

/* plan ahead:

// The eigible stations in an array. Name, Capacity, Type of Est.
// Declare the function chooseStations(stations); with empty parameter.
// declare 'goodStations = [] which will store the good Stations.
// run a loop. 
// if  statement The conditions are = [i]1 >= 20  &&  [i][2](it is a school || community centre )
// no else statement as we don't need to process the unqualified locations.
// return goodStations.

*/




/* 

I tried to solve this but for some reason it isn't working..


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
let goodStations = [];
for (let i = 0; i>= stations.length; i++){
  if (stations[i][1] >= 20 && ((stations[i][2] === 'school') || (stations[i][2] === 'community centre'))) {
    goodStations.push(stations[i][0])
  }
}
return goodStations;
}

console.log(chooseStations(stations));

*/


/* I am going to break down the steps */

// First I will make sure everything is referring well and logging.
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
function chooseStations(stations){
//this loop will iterate through each index for the argumentative array.
  for (let i = 0; i<stations.length; i++) {
//as we loop, we log station[0] then station[1]... and so on
    console.log(stations[i]);
  }
}
console.log(chooseStations(stations))

// following the video because this was a huge wall I hit.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station [1];
    if (capacity >= 20) {
      const type = station [2];
      if (type === 'school' || type === 'community centre') {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations))