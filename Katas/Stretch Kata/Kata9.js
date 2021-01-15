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

//console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let volume = (1 / 3) * PI * Math.pow(radius, 2) * height;
  return volume;
}

//console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let volume = height * width * depth;
  return volume;
}
//console.log(prismVolume(3, 4, 5) === 60);
// end of shape functions


const totalVolume = function (solids) {
  let addVolume = 0;
  for (shape of solids) {
    switch (shape) {
      case ('largeSphere'):
        addVolume += sphereVolume(largeSphere.radius);
        break;
        case ('smallSphere'):
          addVolume += sphereVolume(smallSphere.radius);
        break;
      case 'cone':
        addVolume += coneVolume(cone.radius, cone.height);
        break;
      case 'prism':
        addVolume += prismVolume(prism.height, prism.width, prism.depth);
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

//console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
console.log(totalVolume(duck))



/*
//Test : print the name of the objects within the duck array.
const nameObjects = solids => {
  let nAme = ''
  for (let shape of solids) {
    switch (shape) {
      case 'largeSphere':
        nAme += shape + ' ';
        break;
      case 'smallSphere':
        nAme += shape + ' ';
        break;
      case 'cone':
        nAme += shape
        break;
    }
  }
  return nAme;
}

console.log(nameObjects(duck))
*/
