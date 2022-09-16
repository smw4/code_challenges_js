//Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

//create function body
const reverseArray = function (array) {
	// Create a new array to send items.
	const newArray = [];

	//#region : Sending each item one by one from one array to another array (WORKING).
	// for (let i = 0; i < array.length; i++) { //<----- REMOVE COMMENT TO ACTIVATE
	// newArray.push(array[i])};
	// how to reorder this array:
	// - rearrange the for-loop, where i = array.length; i >= array.length; i-- ??
	//#endregion
	//#region : this works
	// it finds the last element of the array and places it in the front of a new array. Different approach than the one envisioned in the comments below. Could try to implement the original pseudocode, but this already works....
	//#endregion
	for (let i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}

	//#region : initial .push(test) for functionality
	// Using .push() to send array[0] to "newArray"
	//newArray.push(array[0]);  // <----- REMOVE COMMENT TO ACTIVATE
	//#endregion
	//#region : array[o] to array.length[last]
	//    - take the first item in the array and place it at the end of a new array.
	//    - take the second item in the array and do the same.
	//    - take the third item in the array and do the same.
	//#endregion

	return newArray; // return contents of newArray so that it can log to console when called below.
};

//*************************************
// example array...
const fruits = ['banana', 'melon', 'apple'];

//    Pass an array into the new function.
console.log(reverseArray(fruits));

//#region : Concerns
/*Above, I have hard-coded a variable, 'first' to denote the first item of an array. I can hard code 'second', 'third', etc. but I do not know how many items there may be in an array. If someone passes an array into my function with a greater number of items than I have hardcoded variables, the function will trip up.
// Assumption: I want to automatically assign each item in an array its own variable. How can I automatically create new variables to equal the number of items in an array?
// Critique: Do I need to assign each item its own variable in order to push it to the new array? If I can push an item to the array without giving it its own variable name, then do I really need to solve the above problem?
// Outcome: I am able to send items to an array without assigning a unique */
//#endregion
//#region : META NOTE
//Forget implementing the "assign unique ID" functionality for now. Might not be necessary because the function will already know the length of the array and knows when it has already reached the end.
//#endregion
