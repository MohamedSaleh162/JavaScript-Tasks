// تكليف 1

// Replace ? With Arithmetic Operators
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

// تكليف 2

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + num + num - num); // 6

// Soultion Three
console.log(num + (num % num) + num); // 6

// Soultion Four
console.log(num + num + false); // 6

// Solution Five
console.log(num + num + (true % true)); // 6

// Solution Six
console.log(num + num + true - true); // 6

// تكليف 3

let numm = "10";

// Solution One
console.log(+numm + +numm); // 20

// Solution Two
console.log(+numm * (true + true)); // 20

// Solution Three
console.log(+numm * (true + true) + false); // 20

// Solution Four
console.log(+numm * (true + true + true) - numm); // 20

// تكليف 4

let points = 10;

points++;
points++;
points++;
console.log(points); // 13

points--;
points--;
points--;
points--;
points--;
console.log(points); // 8;
