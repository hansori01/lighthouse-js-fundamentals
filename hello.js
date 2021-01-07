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
