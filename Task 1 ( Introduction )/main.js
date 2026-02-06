// تكليف 1

// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <title>Learn JavaScript</title>
//     <script>
//       /*
//       Code One will not work because it is placed in the head section ,
//       And the script file should be exist in body section 
//       */
//       document.getElementById("el").style.color = "red";
//     </script>
//     <script>
//       // Code Two
//       window.onload = function () {
//         document.getElementById("el").style.color = "red";
//       };
//     </script>
//   </head>
//   <body>
//     <h1 id="el">Page Title</h1>
//     <script>
//       // Code Three
//       document.getElementById("el").style.color = "red";
//     </script>
//   </body>
//   </html> 


// تكليف 2
document.write("<h1>Elzero</h1>");

document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

// تكليف 3

console.log(
  "%c Elzero %c Web %c School",
  "color: red ; font-size: 40px",
  "color: green ; font-size: 40px; font-weight: bold ",
  "color: white ; font-size: 40px; background-color: blue",
);

// تكليف 4

console.group("Group 1");
console.log("Message One \nMessage Two ")
console.group(" Child Group");
console.log("Message One \nMessage Two ")
console.group("Grand Child Group");
console.log("Message One \nMessage Two ")
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One \nMessage Two ")

// تكليف 5

console.table(["Mohamed", "Ahmed", "Saleh", "Mohamed", "Saleh"])

// تكليف 6

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

//console.log("Iam In Console");
//document.write("Iam In Page");
