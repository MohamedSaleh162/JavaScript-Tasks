// تكليف 1
/*
// Test Case 1
let num = 9; // "009"
if (num < 10) {
  console.log(`00${num}`);
}
// Test Case 2
let num1 = 20; // "020"
if (num1 > 10 && num1 < 100) {
  console.log(`0${num1}`);
}
// Test Case 3
let num2 = 110; // "110"
if (num2 > 100) {
  console.log(num2);
}

/////////////////////////////////////////////////////////////////////////
// تكليف 2
let num0 = 9;
let str = "9";
let str2 = "20";

if (num0 == str) {
  console.log(`${num0} Is The Same Value As ${str}`);
}
if (num0 !== str) {
  console.log(`${num0} Is The Same Value As ${str} But Not The Same Type`);
}
if (num0 !== str2) {
  console.log(`${num0} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (str !== str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}
// Output
("{num0} Is The Same Value As {str}");
("{num0} Is The Same Value As {str} But Not The Same Type");
("{num0} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");
console.log(" ");
/////////////////////////////////////////////////////////////////////////
// تكليف 3

let num3 = 10;
let num4 = 30;
let num5 = "30";

if (num5 > num3 && num5 !== num4) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number",
  );
}
if (num5 > num3 && num5 !== num4) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number",
  );
}
if (num5 !== num3 && num5 !== num4) {
  console.log(
    `{num5} Value And Type Is Not The Same As {num3} And Type Is Not The Same As {num4}`,
  );
}
console.log(" ");
// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num5} Value And Type Is Not The Same As {num3} And Type Is Not The Same As {num4}");
*/
/////////////////////////////////////////////////////////////////////////
// تكليف 4

// Edit What You Want Here

let num1 = 11;
let num2 = 10;
let num3 = +"11";
let num4 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

