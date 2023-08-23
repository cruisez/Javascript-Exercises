let randomNumber = Math.random();
randomNumber = randomNumber * 5;
randomNumber = Math.floor(randomNumber);

let userInput = prompt("What's your question");
userInput = String(userInput);
let finalResponse;

switch (randomNumber) {
    case 0:
        finalResponse = "It'll not workout";
        break;
    case 1:
        finalResponse = "It'll workout";
        break;
    case 2:
        finalResponse = "Maybe, Maybe not";
        break;
    case 3:
        finalResponse = "Probably not";
        break;
    case 4:
        finalResponse = "Highly likely";
        break;
    case 5:
        finalResponse = "Highly unlikely";
        break;
}

let Output = "You asked me " + userInput + ". I think that " + finalResponse;

console.log(Output);