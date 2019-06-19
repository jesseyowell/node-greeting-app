exports.counter = function() {
	let count = 0;

	for(let i = 0; i < 10; i++) {
		count = count + i;
	}
	console.log(count);
}

exports.hexNumber = function() {
	let myAge = 37;
	let hexAge = myAge.toString(16);

	console.log(hexAge);
}