console.log("تكليف 1");

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mixed = mix
  .map(function (ele) {
    return isNaN(ele) ? ele : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(mixed);
// Elzero

/////////////////////////////////////////////////////////////////////////
console.log("تكليف 2");

let myString = "EElllzzzzzzzeroo";

let filteString = myString
  .split("")
  .filter(function (ele, index) {
    return myString.indexOf(ele) === index;
  })
  .join("");

console.log(filteString);
// Elzero

/////////////////////////////////////////////////////////////////////////

console.log("تكليف 3");

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flatArray = myArray
  .filter(function (acc, current) {
    return acc + current;
  })
  .join("");

console.log(flatArray);

console.log(myArray.flat().join(""));

// Elzero

/////////////////////////////////////////////////////////////////////////

console.log("تكليف 4");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let invertedNumber = numsAndStrings
  .filter(function (ele) {
    return !isNaN(ele);
  })
  .map(function (ele) {
    return -ele;
  });
console.log(invertedNumber);

// [-1, -10, 10, 20, -5, -3]

/////////////////////////////////////////////////////////////////////////

console.log("تكليف 5");

let nums = [2, 12, 11, 5, 10, 1, 99];

let mulNums = nums.reduce(function (acc, current) {
  return current % 2 === 1 ? acc + current : acc * current ;
}, 1);

console.log(mulNums);
// 500
