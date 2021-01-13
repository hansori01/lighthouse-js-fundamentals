/*

A list of name (instructors).
Determine which instructor has the longest name.

We are using Arrays with objects within it. 


Plan -

// each object is within an array, and can be accessed using index.

- try to solve this first with just a normal string then add the objects into it.

['sori', 'vaughn', 'illuminati']

// create a function that determines the length of names
// loop through each index element of the array.
// determine the length of each element.
// store the number into a variable (length) if larger than the variable
// and store the name in another variable
*/

// determines the longest name within the object and returns the object
const instructorWithLongestName = instructors => {
  // stores the object
  let result = [];
  // comparison for determining longest length
  let length = 0;
  // for...of loop to loop through argument array.
  /* this can be done with for loop. We will need to make
  sure the iterator value is used to access the object element in the array.
  for (let person = 0; person <instructors.length; person++){
    if (instructors[person].name.length > length) {
      length = instructors[person].name.length;
      result = instructors[person];
    }
  }*/
  for (let person of instructors) {
    // the 'person' iterator is the actual element itself, not a number so no [] needed.
    if (person.name.length > length) {
      length = person.name.length;
      result = person;
    }
  }
  return result;
}
console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
