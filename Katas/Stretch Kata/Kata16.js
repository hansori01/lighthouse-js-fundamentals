/* Queen Threat Detector

- make a grid of 0 in nested arrays, 8 by 8
-make a function that detects wether or not the two queens
are positioned so that they attack each other.


*/
//GRID
let generateBoard = (white, black) => {  //makes the chess board
  let arr = [];   //holds the array
  for (let y = 0; y < 8; y++) {  //loops through y-axis (rows)
    arr.push([]) // every row loop, we push an empty []
    for (let x = 0; x < 8; x++) { // loops through x-axis (colums)
      arr[y].push(0) // every colum loop pushes a 0
    }
  }
  arr[white[0]][white[1]] = 1; // changes the x,y coordinate to 1 if matches the white [0] & [1]
  arr[black[0]][black[1]] = 1; // ditto for black
  return arr;
}

//check for random cases of placement
let whiteQueen = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
let blackQueen = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
//let whiteQueen = [0, 5]
//let blackQueen = [5, 6]
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);

let queenThreat = () => {
  if ((whiteQueen[0] === blackQueen[0]) || (whiteQueen[1] === blackQueen[1])) {
    return true;
  }
  else if (blackQueen[0] + blackQueen[1] === whiteQueen[0] + whiteQueen[1]) {
    return true;
  }
  else if ((whiteQueen[1] - whiteQueen[0] === blackQueen[1] - blackQueen[0]) || (whiteQueen[0] - whiteQueen[1] === blackQueen[0] - blackQueen[1])) {
    return true;
  }
  return false;
}

console.log(queenThreat(generatedBoard));
