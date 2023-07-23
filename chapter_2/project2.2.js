/*Set values for height in inches and weight in pounds, then convert the values to centimeters and kilos, 
outputting the results to the console:

1 inch is equal to 2.54 cm
1lbs is equal to 0.453592

Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) divided by squared height (in meters). 
Output the results to the console.*/

let heightIninches = 72;
let weightInlbs = 180;
let inTocm = heightIninches * 2.54; // converting inches to cm.
let lbsTokg = weightInlbs * 0.453592; // converting lbs to kg.
let heightInmeters = inTocm / 100; // converting cm to meters.
let bmi = lbsTokg / (heightInmeters ** 2);

console.log(lbsTokg,"and", inTocm);
console.log(bmi);

