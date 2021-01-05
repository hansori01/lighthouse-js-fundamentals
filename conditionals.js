/*

conditionals.js

exercises in conditionals and logical operators dealing with weather and voting. 

*/

// Umbrella reminder if rain

let raining = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}
//Umbrella reminder if rain and scarf reminder if cold.

raining = true;
let cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

// Reminder for appropriate clothing depending on various weathers from < 0 to > 15 degree weather

const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//Scarf reminder for cold days. Short sleeves on warm days
cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

//LOGICAL OPERATORS

//Code below checks if a resident is qualified to vote

const isCitizen = true;
const age = 32;

if (isCitizen && age >18) {
	console.log("you are eligible to vote.");
}

// Using logical operators to alert if extreme weather.

if (temperature < -40 || temperature > 40 ) {
	console.log("Maybe going outside isn't such a great idea...");
}

//Umbrella reminder for rainy days

if (!raining) {
	console.log("Leave your umbrella at home!")
}


//Conditionals.js


