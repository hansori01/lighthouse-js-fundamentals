/* Elementary school if age < 13
Secondary school is age is >=13 || age <=18
Lighthouse labs if age is > 18

*/


const whichSchool = function (age) {
  if ( age < 13 ){
    whichSchool = 'Elementary School';
  } else if (age >= 13 || age <= 18) {
    whichSchool = 'Secondary School';
  } else {
    whichSchool = 'Lighthouse Labs';
  }
}

console.log(whichSchool(23));
