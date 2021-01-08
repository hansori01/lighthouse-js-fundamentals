/* we are carving pumpkins and need to know how much pumpkin scraps we
will have once we're done. We are calculating area of pumpkins.

define 3 functions to calculate area of 3 different shapes:
rectangles
triangles
circles

calculateRectangleArea(length, width)
calculateTriangleArea(base, height)
calculateCircleArea(radius)

here are the equations:

rectangle: length × width
triangle: base × height / 2
circle: π × radius2

to access the value of PI use Math.PI

Planning steps:
-Make three functions that take on different parameters to determine the area.

steps: 
- declare a function
- declare a variable to store information
- equation where the arguments get calculated go here
- create an if statement - if number is a  (-) then return undefined.
- return the value of the variable

*/

// this returns the calculated area of a rectangle
function calculateRectangleArea(length, width) {
  let rectArea = length * width;
// if length or width are negative, it returns undefined
  if (length < 0 || width < 0) {
    return undefined;
  }
  return rectArea;
}
//calculates area of Triangle
function calculateTriangleArea(base, height) {
  let triArea = (base * height) / 2;
//if base or height are negative, it returns undefined
  if (base < 0 || height <0) {
    return undefined;
  }
  return triArea;
}
// calculates the area of a circle
function calculateCircleArea(radius) {
// we use PI method to pull up the pi number. We use POWERS method to make radius^2
  let cirArea = Math.PI * Math.pow(radius, 2);
// if we have a negative radius, it returns 0. 
  if (radius < 0){
    return undefined;
  }
  return cirArea;
}

console.log(calculateRectangleArea(10, -10))
