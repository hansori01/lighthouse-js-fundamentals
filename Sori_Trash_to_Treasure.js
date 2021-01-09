/*

replace city's trash cans with smart cans.
- rubbish gets sorted into waste, recycling and compost bins. 
- complete a fucntion called smartGarbage(trash,bins)
  - responsible for increasing the garbage count for waste, recycling, or compost.

 this

 smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
shoudl output

{
  waste: 4,
  recycling: 3,
  compost: 5
}

  Plan:

 // declare function with two arguments (trash, bins)
 //trash tells our function what type of item
 //bins is an object with three properties (waste, recycling, compost). 
 // bins.properties hold numerical value ([])
 //function increase the correct value in the bins object
 // returns the newly updated object.

 */

 //this function takes in type of trash, and the state of the bins
const smartGarbage = (trash, bins) => {
  //if detected waste, we add to the waste property of bins
  if (trash === 'waste') {
    bins.waste += 1;
  }
  //  //if detected recycling, we add to the recycling property of bins
  else if (trash === 'recycling') {
    bins.recycling += 1; 
  }
    //if none of the above, we add to the compost property of bins
  else {
    bins.compost += 1;
  }
  // return the new property value of bins object. 
  return bins;ß
}

console.log(smartGarbage('waste', {waste: 4, recycling: 2, compost: 5 }))