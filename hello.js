// simple greeting function
/* const sayHello = function () {
	console.log('Hello, world');
}
sayHello();
*/
// Greeting with name
const sayHello = function(name) {
console.log('Hello, ' + name);
}

sayHello('my friend');
sayHello('..you ');
sayHello('Dick');

//Checking to see if I still remember => function with shorter format..
const sayYello = name => 
(`Hello ${name}, wassup`);
console.log(sayYello('Sori'));
// I believe in this format the return is implied..


/*

 Don't forget that using return != print/log :)

						 */


	//console.log
const sayHelloToConsole = function (name) {
console.log('Hello, ' + name);
}

sayHelloToConsole('Chang Soo 창수');

	//return
const returnSayHello = function (name) {
return 'Hello, ' + name;
}
const greeting = returnSayHello('Young Hyo 영효');

/* the first example above will immediately output to console.
the second returns the string to a variable and nothing gets output.
The function returns a value, we can still console.log it later */

//we are not logging the new variable which holds the returned value of returnSayHello('Young Hyo')
console.log(greeting);



