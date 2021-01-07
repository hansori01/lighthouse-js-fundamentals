/*

We will write a function that determines someone's age, given their date of birth

//define a function called ageCalculator(name, yearOfBirth, currentYear)
// const age = '' stores the return value of age that is calculated in function.
//the function should take currentYear - yearofBirth and return the value
//return a string explaining how old the person is 'NAME is AGE years old.'

*/

// This takes the user's name, year of birth and the current year and returns their age.
const ageCalculator = (name, yearOfBirth, currentYear) => {
// this calculates their age by subtracting their birth year to the current year.
  let age = currentYear - yearOfBirth;
// we use their inputted name and the calculated age to let users know the age of the profile.
  return age = name + ' is ' + age + ' years old.';
}

console.log(ageCalculator('Sori', 1988, 2021));