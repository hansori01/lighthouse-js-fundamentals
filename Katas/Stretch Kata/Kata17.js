/*

Taxicab Geometry

Taxi starts at [0,0]
*/
const blocksAway = function (directions) {
  let output = {};
  let north = 0;
  let east = 0;
  let direction = '' // stores the direction we went. North South East West
  if (directions[0] === 'right') { // starting point going east
    east += directions[1];
    direction = 'east';
  }
  else if (directions[0] === 'left') {// starting point going north
    north += directions[1]
    direction = 'north';
  }
  //loop from [2] to the end skipping 1
  for (let i = 2; i < directions.length; i++) {
    //if condition for east--
    if ((direction === 'north' && directions[i] === 'left') || (direction === 'south' && directions[i] === 'right')) {
      i++;
      east -= directions[i];
      direction = 'west';
    }
    //if condition for east ++
    else if ((direction === 'north' && directions[i] === 'right') || (direction === 'south' && directions[i] === 'left')) {
      i++;
      east += directions[i];
      direction = 'east';
    }
    // if condition for north--
    else if ((direction === 'east' && directions[i] === 'right') || (direction === 'west' && directions[i] === 'left')) {
      i++;
      north -= directions[i];
      direction = 'south';
    }
    // if condition for north++
    else if ((direction === 'east' && directions[i] === 'left') || (direction === 'west' && directions[i] === 'right')) {
      i++;
      north += directions[i];
      direction = 'north';
    }
  }
  output.east = east;
  output.west = north;
  return output
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

