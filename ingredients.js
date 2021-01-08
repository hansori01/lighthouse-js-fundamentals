const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

/* 

while loop 

let i = 0;
while (i < ingredients.length) {
console.log(ingredients[i]);
i++
}

for loop

for (i= 0; i<ingredients.length; i++) {
console.log(ingredients[i]);
}

*/


// prints the list from end to beginning using a while loop

let i = ingredients.length - 1;
while (i >=0) {
console.log(ingredients[i]);
i--;
}


