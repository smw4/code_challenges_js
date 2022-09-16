//An array, any array will do.
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

//a function that declines an input parameter.
const politelyDecline = (veg) => {
	console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

//a function that declines each individual element in an array.
const declineEverything = (array) => {
	//the .forEach() method iterates through each element of the array, applying "politelyDecline()" to each one.
	array.forEach(politelyDecline);
};

//here we log the result of calling the above function.
console.log(declineEverything(veggies));

//below are two new functions that employ the exact same logic. Instead of declining, the functions accepts.

//a function that accepts an input parameter
const begrudginglyAccept = (element) => {
	console.log(`Ok, I guess I will eat some ${element}.`);
};

//a function that accepts each individual element in an array
const acceptEverything = (arr) => {
	//the.forEach() method iterates through each element of the array, applying "begrudginglyAccept()" to each one.
	arr.forEach(begrudginglyAccept);
};

//her we log the result of calling the above function
acceptEverything(veggies);
