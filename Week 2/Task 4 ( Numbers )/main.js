// تكليف 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(1000 * 100); // 100000
console.log(200000 / 2); // 100000
console.log(150000 - 50000); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Number("100000")); // 100000
console.log(parseInt("100000.1256")); // 100000
console.log(Math.trunc(100000.1256)); // 100000
console.log(Math.round(100000.4)); // 100000

//////////////////////////////////////////////////////////////////////////

// تكليف 2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//////////////////////////////////////////////////////////////////////////

// تكليف 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

//////////////////////////////////////////////////////////////////////////

// تكليف 4
let myVar = "100.56789 Views";

console.log(Math.trunc(Number.parseFloat(myVar))); // 100
console.log(Number.parseFloat(myVar).toFixed(2)); // 100.57

//////////////////////////////////////////////////////////////////////////

// تكليف 5
let num = 10;

console.log(+Number.isInteger(num) + Number.isInteger(num)); // 2

//////////////////////////////////////////////////////////////////////////

// تكليف 6
let flt = 10.4;

console.log(Number.parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10

//////////////////////////////////////////////////////////////////////////
// تكليف 7
console.log(Math.floor(Math.random() * 5));
