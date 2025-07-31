// Declaring a function
function greet() {
  console.log("hello world");
}

// calling a function

greet();

// Function with parameters

function add(a, b) {
  return a + b;
}
// calling the function

let res = add(5, 6);

console.log(res);

// Function Expressions

const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(5, 6));

// Arrow Functions

const divide = (a, b) => a / b;
console.log(divide(50, 10));

// Default Parameters

function greetUser(name = "Guest") {
  console.log(`Hello ${name}`);
}

greetUser("Kousik");

// Rest Parameters

function sumAll(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum)
}
sumAll(1,2,3,4,5,6)