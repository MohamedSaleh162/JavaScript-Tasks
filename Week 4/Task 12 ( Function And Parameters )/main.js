console.log("تكليف 1");

function sayHello(theName, theGender) {
  if (theGender === undefined) {
    console.log(`Hello ${theName}`);
  } else if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else {
    console.log(`Hello Miss ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

/////////////////////////////////////////////////////////////////////////
console.log("تكليف 2");

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else {
    if (operation === undefined || operation === "add") {
      console.log(firstNum + secondNum);
    } else if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

/////////////////////////////////////////////////////////////////////////
console.log("تكليف 3");

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    let Months = theAge * 12;
    console.log(`${Months} Months`);
    let weeks = Months * 4;
    console.log(`${weeks} weeks`);
    let days = theAge * 365;
    console.log(`${days} days`);
    let Hours = days * 24;
    console.log(`${Hours} Hours`);
    let Minutes = Hours * 60;
    console.log(`${Minutes} Minutes`);
    let Seconds = Minutes * 60;
    console.log(`${Seconds} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

/////////////////////////////////////////////////////////////////////////
console.log("تكليف 5");

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

/////////////////////////////////////////////////////////////////////////
console.log("تكليف 6");

function multiply(...Number) {
  let result = 1;
  for (let i = 0; i < Number.length; i++) {
    if (typeof Number[i] === "string") {
      continue;
    }
    result *=parseInt(Number[i]) ;
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
