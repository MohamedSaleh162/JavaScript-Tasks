// تكليف 1
let userName = "Elzero";
console.log(userName.toLowerCase().charAt(0)); // e
console.log(userName.toLowerCase().at(0)); // e
console.log(userName.toLowerCase()["0"]); // e
console.log(userName.toLowerCase().slice(0, 1)); // e
console.log(userName.toLowerCase().substring(0, 1)); // e
console.log(userName.toLowerCase().substr(0, 1).repeat(3)); // eee

// تكليف 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.includes(letterE)); // True
console.log(word.includes(letterO.toLowerCase())); // True
