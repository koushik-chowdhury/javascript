
# 📘 Data Types + Type System
**(JavaScript – Learn Everything Series by Sheryians Coding School)**

---

## 🔹 What Are Data Types?

Every value in JavaScript has a type.  
There are two categories:

- **Primitive Types** (Stored directly)
- **Reference Types** (Stored as references in memory)

---

## 🔹 Primitive Data Types

| Type       | Example               |
|------------|-----------------------|
| String     | `"hello"`, `'JS'`     |
| Number     | `3`, `-99`, `3.14`     |
| Boolean    | `true`, `false`        |
| Undefined  | `let x;`              |
| Null       | `let x = null;`       |
| Symbol     | `Symbol("id")`        |
| BigInt     | `1234567890123n`      |

---

## 🔹 Reference Data Types

- **Object** – `{ name: "Harsh", age: 26 }`
- **Array** – `[10, 20, 30]`
- **Function** – `function greet() {}`

```js
let person = {
  name: "Koushik",
  skills: ["JS", "React"]
};
```

---

## 🔹 typeof Operator

Use `typeof` to check the data type:

```js
typeof "Koushik" // "string"
typeof 99           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" ❗ (JS bug)
typeof []           // "object"
typeof {}           // "object"
typeof function(){} // "function"
```

---

## 🔹 Type Coercion (Auto Conversion)

JavaScript auto-converts types in certain operations:

```js
"5" + 1        // "51" → number to string
"5" - 1        // 4   → string to number
true + 1       // 2
null + 1       // 1
undefined + 1  // NaN
```

---

## 🔹 Loose vs Strict Equality

- `==` → compares value (with conversion)
- `===` → compares value + type (no conversion)

```js
5 == "5"   // true
5 === "5"  // false
```

✅ Always use `===` for accurate comparisons.

---

## 🔹 NaN – Not a Number

```js
typeof NaN // "number"
```

Even though it means “Not a Number”, `NaN` is still of type number.

---

## 🔹 Truthy and Falsy Values

**Falsy values:**
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Truthy values:** Everything else!

```js
if ("0") {
  console.log("Runs"); // ✅ "0" is a truthy string
}
```

---

## ❓ Common Confusions

- `typeof null` is `"object"` – a known bug.
- `undefined` → unassigned variable.
- `null` → explicitly "nothing".
- `'5' + 1` = `"51"`, but `'5' - 1` = `4`.

---

## 💡 Mindset

JavaScript *automatically* converts types.  
Always be aware of what type you're working with to avoid unexpected bugs.

---

## 🧪 Practice Zone

### ✅ Predict the Output:

```js
console.log(null + 1);        // 1
console.log("5" + 3);         // "53"
console.log("5" - 3);         // 2
console.log(true + false);    // 1
```

### ✅ Check Types:

```js
console.log(typeof []);       // "object"
console.log(typeof null);     // "object"
console.log(typeof 123n);     // "bigint"
```

### ✅ Truthy or Falsy?

```js
console.log(Boolean(0));         // false
console.log(Boolean("0"));       // true
console.log(Boolean([]));        // true
console.log(Boolean(undefined)); // false
```

### ✅ Custom Function:

```js
function isEmpty(value) {
  return value === null || value === undefined || value === "";
}
```

### ✅ Compare with Loose vs Strict:

```js
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

---

## 📌 Summary

- Know the 7 primitive types
- Use `typeof` to inspect
- Watch out for coercion in operations
- Use `===` for safe comparisons
- `null` and `undefined` are different
- Understand truthy/falsy for conditional logic

---