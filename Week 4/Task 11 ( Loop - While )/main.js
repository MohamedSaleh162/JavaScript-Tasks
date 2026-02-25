
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
index = 0;
counter = 0;

while (index < friends.length) {
  let current = friends[index];

  index++;

  if (typeof current === "number") {
    continue;
  }

  if (current.startsWith("A")) {
    continue;
  }
  counter++;
  console.log(`${counter} => ${current}`);
}
