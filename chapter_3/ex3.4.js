let myCar = {
    make : "BMW",
    model: "330i",
    horsepower: "255bhp",
    color: "Blue",
    modelIsElectric: false,
    forSale: false,
}

let color = "color";
myCar[color] = "Ash";
color = "forSale";
myCar[color] = true;

console.log("Make:", myCar["make"],",","Model:", myCar["model"]);
console.log("Color:", myCar[color]);