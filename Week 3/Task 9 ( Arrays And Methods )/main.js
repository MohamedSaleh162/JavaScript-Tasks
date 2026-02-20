console.log("تكليف 1");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

////////////////////////////////////////////////////////////////////////////////////

console.log("تكليف 2");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.splice(0, 1);
friends.pop();
console.log(friends); // ["Eman", "Osama"]

////////////////////////////////////////////////////////////////////////////////////

console.log("تكليف 3");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = finalArr.concat(
  arrTwo[arrTwo.indexOf("Z")],
  arrOne.reverse(),
  arrTwo[arrTwo.indexOf("B")],
  arrTwo[arrTwo.indexOf("A")],
);

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

////////////////////////////////////////////////////////////////////////////////////

console.log("تكليف 4");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO

////////////////////////////////////////////////////////////////////////////////////

console.log("تكليف 5");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
  console.log("Found");
}
if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle) > -1) {
  console.log("Found");
}

////////////////////////////////////////////////////////////////////////////////////

console.log("تكليف 6");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = allArrs.concat(
  arr2[arr2.indexOf("F")],
  arr1[arr1.indexOf("X")].toLowerCase(),
  arr2[arr2.indexOf("Y")].toLowerCase(),
);
allArrs = allArrs.join("");
console.log(allArrs); // fxy
