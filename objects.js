// The following are JavaScript object exercises from javascript.info

// Exercise #1 - Hello, object
let user = {};
user.name = "John";
user.surname = "Smith";

// Changing the value of name to Pete
user.name = "Pete";

// deleting the name property from the object
delete user.name;

console.log("Logging the user object to the console.");
console.log(user);

// Exercise #2 - Check for emptiness
// Checking objects to see if they are empty or not

function isEmpty(obj) {
  let counter = 0;
  for (let key in obj) {
    if (key !== undefined) {
      ++counter;
    }
  }

  if (counter == 0) {
    return true;
  } else {
    return false;
  }
}

let schedule = {};

alert(isEmpty(schedule)); // should be true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // should be false

// Exercise #3 - Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log("Here are the entries for the salaries object:");
console.log(salaries);

let total = 0;
for (let key in salaries) {
  total += salaries[key];
}

console.log("The sum of the salaries is: " + total);

// Exercise #4 - Multiply numeric property values by 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
