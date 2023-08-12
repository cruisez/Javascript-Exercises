/*
Create a prompt to ask the user's age
Convert the response from the prompt to a number
Declare a message variable that you will use to hold the console message for the user
If the input age is equal to or greater than 21, set the message variable to confirm entry to a venue and the ability to purchase alcohol
If the input age is equal to or greater than 19, set the message variable to confirm entry to the venue but deny the purchase of alcohol
Provide a default else statement to set the message variable to deny entry if none are true
Output the response message variable to the console
*/

let age = prompt("What's your age"); // Using prompt to ask a user age.
age = Number(age);
let message;

if (age >= 21) {
    message = ("You can enter and buy alcohol");
}
else if (age >= 19) {
    message = ("You can enter but you can't buy alcohol");
}
else {
    message = ("Sorry only people who are 19 and above are allowed");
}

alert(message); // Using alert to display message.
//console.log(message);