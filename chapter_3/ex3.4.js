/*  Practice Exercise 3.4

1.Create a new myCar object for a car. 
Add some properties, including, but not limited to, make and model, 
and values for a typical car or your car. Feel free to use booleans, strings, or numbers.

2. Create a variable that can hold the string value color. 
This variable containing a string value color can now be used to reference the property name within myCar. 
Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.

3. Use that same variable and assign a new property string value to it, such as forSale. 
Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.

4. Output make and model into the console.
5 .Output the value of forSale into the console.*/

let myCar = {
    make : "BMW",
    model: "330i",
    horsepower: "255bhp",
    color: "Blue",
    modelIsElectric: false,
    forSale: false,
}

let bodyColor = "color"; // Using variable to store the property.
myCar[bodyColor] = "Ash"; // Updating the value of the property.
bodyColor = "forSale";
myCar[bodyColor] = true;

console.log("Make:", myCar["make"],",","Model:", myCar["model"]);
console.log("forSale:", myCar[bodyColor]);