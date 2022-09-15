//Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

//create function body
const reverseArray = function (array) {
	// Create a new array to send items.
	const newArray = [];
	// Try using .push() to send "first" to "newArray"
	newArray.push(array[0]);

	return newArray; // return contents of newArray so that it can log to console when called below.
};

//*************************************
// example of passing an array into a function and calling the first item in the array.
const fruits = ['banana', 'melon', 'apple'];

console.log(reverseArray(fruits));

//logic of the function:
//    - pass an array into the new function.
//    - take the first item in the array and place it at the end of a new array.
//    - take the second item in the array and do the same.
//    - take the third item in the array and do the same.

//Calling the function
//    console.log(reverseArray())

//#region : Concerns
/*Above, I have hard-coded a variable, 'first' to denote the first item of an array. I can hard code 'second', 'third', etc. but I do not know how many items there may be in an array. If someone passes an array into my function with a greater number of items than I have hardcoded variables, the function will trip up.
// Assumption: I want to automatically assign each item in an array its own variable. How can I automatically create new variables to equal the number of items in an array?
// Critique: Do I need to assign each item its own variable in order to push it to the new array? If I can push an item to the array without giving it its own variable name, then do I really need to solve the above problem?
// Outcome: I am able to send items to an array without assigning a unique */
//#endregion
//#region : META NOTE
//Forget implementing the "assign unique ID" functionality for now. Might not be necessary because the function will already know the length of the array and knows when it has already reached the end.
//#endregion
