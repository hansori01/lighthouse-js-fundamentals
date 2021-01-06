// Looping and Repetition practice

// while loop repeats the chorus ten times at the end of song.

const chorus = "Let's dance!";
let repeat = 0;

/*
while (repeat<10) {
	console.log(chorus);
	repeat++;
}

// ending tag line after the chorus repeat

console.log('Until the sun comes up!');

*/


// Key change on the 5th repeat of chorus

while (repeat<10){
	if (repeat === 5){
		console.log('*change key*');
}
	console.log(chorus);
	repeat++;
}

console.log('Until the sun comes up!');

