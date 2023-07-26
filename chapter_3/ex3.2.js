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

list.push("milk", "bread", "apples");
list.splice(1,1,"bananas","eggs");
let removeLast = list.pop();
console.log(removeLast);
list.sort();

indexValueOfMilk = list.indexOf("milk");
console.log(indexValueOfMilk);

list.splice(1,0,"carrots", "lettuce");

let drinks = ["juice", "pop"];
let combinedList = list.concat(drinks, drinks);

indexValueOfList2 = combinedList.lastIndexOf("pop");

console.log(indexValueOfList2);
console.log(combinedList);
