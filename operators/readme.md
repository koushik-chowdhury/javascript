
# 📘 Chapter 3: Operators

---

## 🔹 What Are Operators?

Operators are special symbols or keywords used to perform operations on values.  
Think of them as the *verbs* in JavaScript – they let you act on data.

---

## ➕ Arithmetic Operators

Used for basic math:

```js
+  // addition
-  // subtraction
*  // multiplication
/  // division
%  // modulus (remainder)
** // exponentiation (power)
```

### ✅ Example:

```js
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(2 ** 3); // 8
```

---

## ➡️ Assignment Operators

Used to assign values to variables.

```js
=   // assign
+=  // a += b → a = a + b
-=, *=, /=, %= 
```

### ✅ Example:

```js
let score = 5;
score += 2; // score = 7
```

---

## 🔍 Comparison Operators

Used to compare values.

```js
==   // equal (loose)
===  // equal (strict)
!=   // not equal (loose)
!==  // not equal (strict)
> < >= <=
```

### ✅ Example:

```js
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

---

## ✅ Logical Operators

Used for combining conditions.

```js
&& // AND (both must be true)
|| // OR (either one true)
!  // NOT (negates truthiness)
```

### ✅ Example:

```js
let age = 20, hasID = true;
if (age >= 18 && hasID) {
  console.log("Allowed");
}
```

---

## ➖ Unary Operators

Operate on a single value.

```js
+value       // convert to number
-value       // negate
++value / value++ // increment
--value / value-- // decrement
typeof        // get type
```

---

## ❓ Ternary Operator

Shorthand for `if...else`.

```js
condition ? valueIfTrue : valueIfFalse
```

### ✅ Example:

```js
let score = 80;
let grade = score > 50 ? "Pass" : "Fail";
```

---

## 📌 typeof Operator

Returns the type of a value.

```js
typeof 123         // "number"
typeof "hello"     // "string"
typeof null        // "object" ❗
typeof []          // "object"
typeof function(){}// "function"
```

---

## ⚠️ Common Confusions

- `"5" + 1` = `"51"` (string concatenation)  
- `"5" - 1` = `4` (number subtraction)  
- `!!value` → converts value to boolean  
- `++i` vs `i++` → pre vs post increment  
- `typeof null` is `"object"` (known bug)

---

## 💡 Mindset

- Use `===` instead of `==`
- Ternary is great for quick decisions
- Think in truthy/falsy when using `&&`, `||`, `!`

---

## 🧪 Practice Zone

### ✅ Predict the Output:

```js
console.log("10" + 1);        // "101"
console.log("10" - 1);        // 9
console.log(true + false);    // 1
console.log(!!"Koushik");   // true
```

### ✅ Convert with Unary `+`:

```js
let str = "42";
let num = +str;
console.log(num); // 42
```

### ✅ Use Ternary:

```js
let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
```

### ✅ Build a Calculator:

```js
function calc(a, b, operator) {
  switch(operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return "Invalid operator";
  }
}
```

### ✅ Score Logic:

```js
let marks = 82;
let grade =
  marks >= 90 ? "Excellent" :
  marks >= 75 ? "Good" :
  marks >= 50 ? "Average" : "Fail";

console.log(grade);
```

---

## 📌 Summary

- Arithmetic = Math
- Assignment = Set/update values
- Comparison = True/false checks
- Logical = Combine conditions
- Unary = One value (type check, negation)
- Ternary = Short `if...else`
- Always use `===` and `!!` wisely

---