/*

we are installing special sensors on some streets to monitor 
how often cars pass by and track their speeds. 

//declare a function named carPassing(cars, speed)
//function carPassing(cars, speed) takes in an array of car objects and the speed of car.
//function creates a new object with property called 'speed' and 'time
// that object gets added to the cars array. 
// retrieve the current time for setting the time property with Date.now()
//the function returns an array that includes all of the lements in cars as well as our new element.
// we may need to use .push() to add our new object to the cars array.

ok for some reason I overthought this..
- the cars is a variable that logs that cars that go by
- I'm not sur ewhy the speed needs a varabile..?
*/

// function pushes the current date and speed of car into the cars array
const carPassing = (cars, speed) => {
  // when this function called called, we log the current time and the speed
cars.push({time: Date.now(), speed: speed})
//returns the newly updated cars object
return cars;
}


const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));