/*

turning a normal string in camelCase text.
we will get a string with spaces. If there is a space, 
join and then turn the first letter into uppercase. 

*/


const camelCase = function (input) {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      /* whenever there is a space, 
      we go to the next index [index + 1]. and turn that to UpperCase.*/
      res.push(input[i + 1].toUpperCase());
      // i++ makes us skip the past the next value.
      i++;
    }
    else {
      res.push(input[i]);
    }
  }
  return res.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


/*

in this one, in the if block - I put the i++
not at the end of the block, but before the .push() method.
that way, we are already skipping the space, and just going to manipulate
the capital

*/

const camelCase = function (input) {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      /* whenever there is a space, 
      we go to the next index [index + 1]. and turn that to UpperCase.*/
      i++;
      res.push(input[i].toUpperCase());
      // i++ makes us skip the past the next value.
    }
    else {
      res.push(input[i]);
    }
  }
  return res.join('');
};

console.log(camelCase("this is a string"));