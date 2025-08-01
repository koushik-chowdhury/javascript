# Chapter 6: Functions in JavaScript

Functions are blocks of code designed to perform a particular task. They help in code reusability and modularity.

---

## 🔹 Declaring a Function

```js
function greet() {
  console.log("Hello, world!");
}
```

---

## 🔹 Calling a Function

```js
greet(); // Output: Hello, world!
```

---

## 🔹 Function with Parameters

```js
function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // Output: 7
```

---

## 🔹 Function Expressions

```js
const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(5, 6)); // Output: 30
```

---

## 🔹 Arrow Functions

```js
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // Output: 5
```

---

## 🔹 Default Parameters

```js
function greetUser(name = "Guest") {
  console.log("Hello, " + name);
}

greetUser(); // Output: Hello, Guest
```

---

## 🔹 Rest Parameters

```js
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
```

---

## 🔹 Callback Functions

```js
function sayHi() {
  console.log("Hi!");
}

function greetUser(callback) {
  callback();
}

greetUser(sayHi); // Output: Hi!
```

## 🧠 Practice Questions

- Write a function to check if a number is even or odd.

- Create a function to convert temperature from Celsius to Fahrenheit.

- Write a function that returns the square of a number.

- Create a function that reverses a given string.

- Build a function that returns the max of three numbers.

- Write a function to find the factorial using recursion.

- Create a function that checks if a number is prime.

- Write a function that returns the Fibonacci sequence up to n terms.

- Create a calculator function using a higher-order function.
- Implement a timer using setTimeout inside a function.
- Write a BMI Calculator.
- Create a reusable discount calculator (HOF).
- Create a counter using closur.
- use IIIFE to isolate variable.

---

## ✅ Summary

- Functions are reusable blocks of code.
- They can accept parameters and return values.
- Support for default, rest, and arrow functions.
