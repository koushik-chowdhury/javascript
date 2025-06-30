
# 📘  1: Variables & Declarations


## 🔹 What Are Variables?

Variables are containers used to store data values.  
They help in:
- Storing data
- Reusing values
- Updating information during program execution

Think of a variable as a *named box* where you can store and retrieve a value.

### ✅ Declaring Variables in JavaScript

You can declare a variable using:
- `var`
- `let`
- `const`

---

## 🔹 var, let, and const – Comparison

| Keyword | Scope         | Redeclarable | Reassignable | Hoisted | Notes |
|---------|---------------|--------------|--------------|---------|-------|
| `var`   | Function scope | ✅ Yes       | ✅ Yes       | ✅ Yes  | Hoisted with `undefined` |
| `let`   | Block scope    | ❌ No        | ✅ Yes       | ✅ TDZ  | Safe & modern |
| `const` | Block scope    | ❌ No        | ❌ No        | ✅ TDZ  | Constant reference, not value |

---

## 🔹 Examples

### ✅ `var`

```js
var score = 10;
var score = 20; // ✅ Redeclaration allowed
console.log(score); // 20
```

### ✅ `let`

```js
let age = 25;
age = 30; // ✅ Reassignment allowed
let age = 40; // ❌ SyntaxError: Identifier 'age' has already been declared
```

### ✅ `const`

```js
const PI = 3.14;
PI = 3.14159; // ❌ TypeError: Assignment to constant variable
```

---

### ❗ `const` with objects or arrays

```js
const student = { name: "Koushik" };
student.name = "Simran"; // ✅ Allowed (mutating object)
student = {}; // ❌ Error: reassignment not allowed
```

---

## 🔹 Scope in Real Life

- **Block Scope** → Variables inside `{ }`, e.g., loops, conditions.
- **Function Scope** → Variables declared inside a function.

```js
{
  var x = 5;
  let y = 10;
  const z = 15;
}

console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError
```

---

## 🔹 Hoisting

JavaScript moves all declarations to the top of the scope — called **hoisting**.

### ✅ `var` is hoisted and initialized as `undefined`

```js
console.log(a); // undefined
var a = 10;
```

### ❌ `let` and `const` are hoisted but in the TDZ (Temporal Dead Zone)

```js
console.log(b); // ReferenceError
let b = 20;
```

---

## ⚠️ Common Confusions

- `const` protects the *variable binding*, not the contents (especially with arrays/objects).
- `var` is outdated — avoid using it.
- Use `const` when you don’t plan to reassign. Use `let` when reassignment is needed.

---

## 💡 Mindset Rule

- ✅ Use `const` by default.
- ✅ Use `let` if reassignment is needed.
- ❌ Avoid `var`.

---

## 🧪 Practice Zone

1. **Declare variables:**

```js
const name = "Koushik";
const city = "Malda";
let age = 23;
```

2. **Try redeclaring with `let`:**

```js
let x = 5;
let x = 10; // ❌ Error
```

3. **Hoisting check:**

```js
console.log(count);
var count = 42; // Output: undefined
```

4. **`const` object mutation:**

```js
const person = { name: "John" };
person.age = 30; // ✅ Works
```

5. **TDZ error:**

```js
console.log(data); // ❌ ReferenceError
let data = "Sheryians";
```

6. **Array mutation with `const`:**

```js
const arr = [1, 2, 3];
arr.push(4); // ✅ Allowed
console.log(arr); // [1, 2, 3, 4]
```

---

## 📌 Summary

- Use `const` for safety and clarity.
- `let` is for changeable values.
- Avoid `var` – it can lead to bugs.
- Understand block vs function scope.
- Be aware of hoisting behavior.

---
