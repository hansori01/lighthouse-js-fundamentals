let num = 8;
let board = '';

for (let y = 1; y < num + 1; y++) {
  for (let x = 1; x < num + 1; x++) {
    // very clever to simplify the code here
    if ((y + x) % 2 === 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  // new line as the parent loop finishes (row)
  board += '\n'
}
console.log(board)

/* 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/
