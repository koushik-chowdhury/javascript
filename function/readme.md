
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
const multiply = function(x, y) {
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

---

## ✅ Summary

- Functions are reusable blocks of code.
- They can accept parameters and return values.
- Support for default, rest, and arrow functions.

