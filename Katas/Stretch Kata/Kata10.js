/*
?? go over the .includes() method 

Write a function that helps determine which recipes
match the ingredients that both bakeries have in stock. 

chooseRecipe(ingredientsA, ingredientsB, recipeObjects)
*/


const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let chosenRecipe = '';
  let weHave = bakeryA.concat(bakeryB)
  for (recipe of recipes) {
    if (weHave.includes(recipe.ingredients[0]) && weHave.includes(recipe.ingredients[1])) {
      chosenRecipe = recipe.name
    }
  }
  return chosenRecipe
}



let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
