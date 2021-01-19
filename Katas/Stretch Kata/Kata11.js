/*

Create a function that calculate which coins we should use when giving change.

$10.00 - 1000 (whole number in cents)

Our function should return an object which describes the total amount of change
for the cashier to give back. 

Return the total change in an object:
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/


// declare the function that tells you which bills/coins to give to customer
const calculateChange = function (total, cash) {
  // determine the $ owed back
  let change = cash - total;
  // stores the bills/coin needing to return
  let owed = {};
  if (change > 2000) {
    owed.twentyDollars = Math.floor(change / 2000);
    change = change % 2000;
  } if (change > 1000) {
    owed.tenDollars = Math.floor(change / 1000);
    change = change % 1000;
  } if (change > 500) {
    owed.fiveDollars = Math.floor(change / 500);
    change = change % 500;
  } if (change > 200) {
    owed.twoDollars = Math.floor(change / 200);
    change = change % 200;
  } if (change > 100) {
    owed.oneDollar = Math.floor(change / 100);
    change = change % 100;
  } if (change > 25) {
    owed.quarter = Math.floor(change / 25);
    change = change % 25;
  } if (change > 10) {
    owed.dime = Math.floor(change / 10);
    change = change % 10;
  } if (change > 5) {
    owed.nickel = Math.floor(change / 5);
    change = change % 5;
  } else {
    owed.penny = change;
  }
  return owed
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));








