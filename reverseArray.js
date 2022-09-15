//Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

//create function body
const reverseArray = function (array) {
	let first = array[0];
	return first;
};

// example of passing an array into a function and calling the first item in the array.
const fruits = ['banana', 'melon', 'apple'];

console.log(reverseArray(fruits));

//logic of the function:
//    - pass an array into the new function.
//    - take the first item in the array and place it at the end of a new array.
//    - take the second item in the array and do the same.
//    - take the third item in the array and do the same.

//- Once the function reencounters an item it has already sorted, return the new array.
//    - if the object already has a unique ID, do not move it. Just return the array.

//Calling the function
//    console.log(reverseArray())

//META NOTE: Forget implementing the "assign unique ID" functionality for now. Might not be necessary because the function will already know the length of the array and knows when it has already reached the end.
