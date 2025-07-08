// Arithmatic operator

let a = 10, b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.33
console.log("Modulus:", a % b);         // 1
console.log("Exponentiation:", a ** b); // 1000

// Assignment Operators

let x = 5;

x += 2; // x = x + 2
console.log("x += 2:", x); // 7

x *= 3; // x = x * 3
console.log("x *= 3:", x); // 21

// Comparison Operators

console.log(5 == "5");    // true (loose equality)
console.log(5 === "5");   // false (strict equality)
console.log(10 != 20);    // true
console.log(10 > 5);      // true
console.log(10 <= 10);    // true

// Logical Operators 

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Access Granted"); // ✅
}

if (age < 18 || hasID) {
  console.log("One condition true"); // ✅
}

console.log("Not true:", !true); // false

// Unary Operators

let str = "123";
console.log("+str:", +str); // 123 (converted to number)

let count = 0;
console.log("Pre-increment:", ++count); // 1
console.log("Post-increment:", count++); // 1 (then becomes 2)
console.log("After Post-increment:", count); // 2

console.log("typeof 'hello':", typeof "hello"); // string
console.log("typeof 100:", typeof 100); // number

// Ternary Operator

let score = 85;
let result = score >= 50 ? "Pass" : "Fail";
console.log("Result:", result); // Pass
