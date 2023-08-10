/*
1. Create an object named people that contains an empty array that is called friends.
2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console.*/

let people = {
  friends: []
};
friend1 = {
  firstName: "John",
  lastName: "Connor",
  ID: 123,
};
friend2 = {
  firstName: "Tom",
  lastName: "Cruise",
  ID: 456,
};
friend3 = {
  firstName: "Sarah",
  lastName: "Connor",
  ID: 789,
};


people.friends.push(friend1, friend2, friend3); // Using push method to add an object to an array.
console.log(people);