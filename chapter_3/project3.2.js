/*
Create an array to hold an inventory of store items.
Create three items, each having the properties of name, model, cost, and quantity.
Add all three objects to the main array using an array method, and then log the inventory array to the console.
Access the quantity element of your third item, and log it to the console.
*/

const inventory = [];

const items = [{ // Objects in array.
    name: "bmw",
    model: "30i",
    cost: 50000,
    quantity: 10,
},
{
    name: "audi",
    model: "501",
    cost: 60000,
    quantity: 5,
},
{
    name: "toyota",
    model: "956",
    cost: 30000,
    quantity: 6,

}];

inventory.push(items);
console.log(inventory);
let thirdItemQuantity = items[2].quantity; 
// Accessing and storing the value of a property in a variable.
console.log("quantity: ",thirdItemQuantity);