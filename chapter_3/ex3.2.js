/* Practice exercise 3.2

Create an empty array to use as a shopping list.
Add Milk, Bread, and Apples to your list.
Update "Bread" with Bananas and Eggs.
Remove the last item from the array and output it into the console.
Sort the list alphabetically.
Find and output the index value of Milk.
After Bananas, add Carrots and Lettuce.
Create a new list containing Juice and Pop.
Combine both lists, adding the new list twice to the end of the first list.
Get the last index value of Pop and output it to the console.*/

let list = [];

list.push("milk", "bread", "apples"); // Adding element using push method.
list.splice(1,1,"bananas","eggs"); // Using splice to add and delete elements from a certain index
let removeLast = list.pop();// Using pop to remove last element
console.log(removeLast);
list.sort();
console.log(list);

indexValueOfMilk = list.indexOf("milk");// Using indexOf to find the position of an element
console.log(indexValueOfMilk);

list.splice(1,0,"carrots", "lettuce");

let drinks = ["juice", "pop"];
let combinedList = list.concat(drinks, drinks); // Using concat to link to variables.

indexValueOfList2 = combinedList.lastIndexOf("pop"); // Using lastIndexOf to find the position of an last Element

console.log(indexValueOfList2);
console.log(combinedList);
