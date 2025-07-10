# 📘 Chapter 4: Control Flow

_Control flow decides **which code runs**, **when it runs**, and **how many times it runs**. It's like decision-making + direction in your JavaScript program._

---

## ✅ if, else if, else

```js
if (condition) {
  // runs if condition is true
} else if (anotherCondition) {
  // runs if first was false, second is true
} else {
  // runs if none are true
}
```

### Example:
```js
let marks = 78;
if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else {
  console.log("C");
}
```

---

## 🔄 switch-case

_Simplifies checking one variable against many values._

```js
switch (value) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // fallback
}
```

### Example:
```js
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Yellow");
    break;
  case "apple":
    console.log("Red");
    break;
  default:
    console.log("Unknown");
}
```

---

## ⛔ Early Return Pattern

_Cleaner than deep nesting in functions._

```js
function checkAge(age) {
  if (age < 18) return "Denied";
  return "Allowed";
}
```

---

## ⚠️ Common Confusions

- `switch-case` runs all cases after a match **unless you `break`**
- `else if` chain works **top-down** – order matters
- You can use **truthy/falsy** directly in `if`

---

## 🧠 Mindset

- Control flow = **conditional storytelling**
- Write **readable branches**
- Avoid deep nesting — use **early return** when possible

---

## 🧪 Practice Zone

1. **Student Grade Logic**:
```js
let marks = 82;
// Output "A", "B", "C", "D", or "F" based on ranges
```

2. **Rock-paper-scissors**:
```js
// Given player1 and player2's choice, print winner or draw
```

3. **Login message**:
```js
let isLoggedIn = true;
let isAdmin = false;
// Show different messages based on combinations
```

4. **Weather Advice**:
```js
let weather = "rainy";
// Use switch-case to print what to wear
```

5. **Age Checker**:
```js
let age = 66;
// Return "Kid", "Teen", "Adult", or "Senior"
```