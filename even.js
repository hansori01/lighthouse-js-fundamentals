/*
	This code takes the argument, and returns a Boolean value
	representing if the number is even.
	I guess this is some sort of implicit boolean check that return has..?
										*/

const isEven = function (num) {
return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);
console.log(isEven(323932272));
/* console.log(isEven(seven));
just thought I'd check..
Remember a bit about implicit 'translate..' what was it called..?
*/


