/*Create an array containing three values: 1, 2, and 3.
Nest the original array into a new array three times.
Output the value 2 from one of the arrays into the console.*/

let arr = [1,2,3];
let arrOfarrays = [arr,arr,arr];
let middleValue = arrOfarrays[0][1];
console.log(arrOfarrays);
console.log(middleValue);