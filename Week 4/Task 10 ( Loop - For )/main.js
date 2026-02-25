/*
console.log("تكليف 1");
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i+=10) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

// Output
10
20
30
50
60
70
80
90
100
*/
////////////////////////////////////////////////////////////////////////////////////
/*
console.log("تكليف 2");

let start = 10;
let end = 0;
let stop = 3;
// console.log(start);
for (let i = start; i > end; i--) {
  if (i === stop) {
    break;
  }
  if (i === start) {
    console.log(`${start}`);
    continue;
  }
  console.log(`0${i}`);
}
console.log(`0${stop}`);

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
*/
////////////////////////////////////////////////////////////////////////////////////
/*
console.log("تكليف 3");

let start = 1;
let end = 6;
let breaker = 2;

for (let i = start ; i<=end; i++) {
  console.log(i);
  for(let j = breaker ; j<end ; j+=2){
    console.log(`- - ${j}`)
  }
}
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
*/
////////////////////////////////////////////////////////////////////////////////////
/*
console.log("تكليف 4");
let index = 10;
let jump = 2;

let i = index;
for (;;) {
  // Write Your Code Here
  console.log(i)
  i -= 2;
  if(i>=jump && i==jump){
    break;
  }
}

// Output
10;
8;
6;
4;
*/
////////////////////////////////////////////////////////////////////////////////////

console.log("تكليف 5");
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = letter.length;
for (let i = +false; i < friends.length; i++) {
  if (friends[i].charAt(0) === letter.toUpperCase()) {
    continue;
  }
  console.log(`${counter} => ${friends[i]}`);
  counter++;
}

// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");

////////////////////////////////////////////////////////////////////////////////////
/*
console.log("تكليف 6");

let start = 0;
let swappedName = "elZerO";
let result ="";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName.charAt(i) === swappedName.charAt(i).toLowerCase()) {
    result += swappedName.charAt(i).toUpperCase();
  }
  else {
    result += swappedName.charAt(i).toLowerCase();
  }
}
console.log(result);

// Output
("ELzERo");
*/
////////////////////////////////////////////////////////////////////////////////////

console.log("تكليف 7");

let start = 0;
let mix = [1, 2, 3, "Ahbaeosujghcu", "Bwefwag", "Cshths", 4];

for(let i = +true ; i<mix.length ; i++) {
  if(typeof mix[i] === "string") {
    continue;
  }
  console.log(mix[i]);
}

// Output
2
3
4