/*

V = ⁴⁄₃πr³. - sphereVolume(radius) calculate  volume of a sphere 
V=13πr^2h - coneVolume(radius, height)  calculate  volume of  cone 
V=Bh - prismVolume(height, width, depth)  calculate  volume
totalVolume() - fourth function will receive an array containing
different shapes that make up a single attraction.
It needs to use the three different functions to calculate the total volume.

*/

// PI as a global variable
const PI = 3.14159;

// function that determines the volume of different shapes
const sphereVolume = function (radius) {
  let volume = (4 / 3) * PI * Math.pow(radius, 3);
  return volume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let volume = (1 / 3) * PI * Math.pow(radius, 2) * height;
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let volume = height * width * depth;
  return volume;
}
console.log(prismVolume(3, 4, 5) === 60);
// end of shape functions

// totalVolume function takes in an array with different shapes
const totalVolume = function (solids) {
  //variable holds the total volume of air needed for the shape.
  let addVolume = 0;
  //we loop through each element(shapes) of solids.
  for (shape of solids) {
    // loop through each element of solids.
    // each element in solids is a VARIABLE 
    // each variable has objects. We want to match shape.type 
    switch (shape.type) {
      // if the property is sphere (type: sphere)
      case 'sphere':
        // we run the sphere Volume calc function. and the radius is the shape.radius (solids(duck) shape(duck[i] = object))
        addVolume += sphereVolume(shape.radius);
        break;
      case 'cone':
        addVolume += coneVolume(shape.radius, shape.height);
        break;
      case 'prism':
        addVolume += prismVolume(shape.height, shape.width, shape.depth);
        break;
    }
  }
  return addVolume;
}
const largeSphere = {
  type: 'sphere',
  radius: 40
}
const smallSphere = {
  type: 'sphere',
  radius: 10
}
const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}
const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
//console.log(totalVolume(duck))