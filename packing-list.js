const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log('Kitchen stuff to pack:');
/*for (let stuff of packingList) {
console.log(stuff);
}
console.log(packingList[3]);
*/

// using a while loop to loop over an array

let i = 0;
while (i < packingList.length) {
console.log(packingList[i]);
i++
}
