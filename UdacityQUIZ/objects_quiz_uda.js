/*

Donuts Revisited (7-6)

Array of donutes:

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

Use the forEach() method to loop over the array and print donut summaries.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
*/
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// forEach() loop runs through every array element.
donuts.forEach((donut) => {
  //each iteration is called donut and we extract the type and cost from each iteration.
  donut= `${donut.type} donuts cost $${donut.cost} each`;
  console.log(donut)
})



/* 

Facebook Friends (7-5)

Create an object called 'facebookProfile' with properties:
  - name
  - friends (number of friends)
  - messages (string of messages you've posted)

with 4 methods:
postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1

*/

// declare an object facebookProfile
const facebookProfile = {
  // name holds the value of your name
  name: 'Sori Han',
  // friends hold number of friends
  friends: 0,
//messages hold the strings with your messages in arrays
  messages: [],
// postMessages(message) using push() we add msg string to the array.
  postMessage: messages => facebookProfile.messages.push(messages),
// deleteMessage(index) using splice() delete the messages
  deleteMessage: index => {
    if (facebookProfile.messages.length > 0) {
      facebookProfile.messages.splice(index, 1)
    }
  },
// addFriend() - add to the number of friends ++
  addFriend: () => facebookProfile.friends++,
// removeFriend() - decreases the friend count by --
  removeFriend: () => { if (facebookProfile.friends > 0){
    return facebookProfile.friends--
  }
  }
};
//we can access the name of keys as well.
const keys = Object.keys
console.log(keys(facebookProfile))
// or 
console.log(Object.keys(facebookProfile));

//testing the syntax above omg it works i made facebook im quitting bootcamp bai jk.
facebookProfile.postMessage('hello')
facebookProfile.postMessage('yo')
facebookProfile.postMessage('sup')
facebookProfile.deleteMessage(0)
facebookProfile.addFriend()
facebookProfile.addFriend()
facebookProfile.addFriend()
facebookProfile.removeFriend()
facebookProfile.removeFriend()
console.log(facebookProfile.messages)

/*

Bank Accounts (7-3)

Using the given object, add 'printAccountSummary()' method that returns the following 
account message.

Welcome!
Your balance is currently $1000 and your interest rate is 1%.
*/

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: () => `Welcome!\nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%.`
};
console.log(savingsAccount.printAccountSummary())



/*

Menu Items (7-2)
Create a 'breakfast' object to represent the following menu items.

The Lumberjack - $9.95
eggs, sausage, toast, hashbrowns, pancakes

Object should contain the properties - name / price / ingredients.

*/

const breakfast = {
  name: 'The Lumberjack',
  price: 9.95,
  ingredients: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
};

console.log(breakfast); /*
                              Prints: 
{
  name: 'The Lumberjack',
  price: 9.95,
  ingredients: [ 'eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes' ]
}
*/
console.log(breakfast.name);
console.log(`$ ${breakfast.price}`);
// we call the ingredients property's values. Then we join() to turn into strings from arrays.
console.log(breakfast.ingredients.join());


