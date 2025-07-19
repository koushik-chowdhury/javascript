# 🔁 Chapter 5: Loops


---

## 🌀 Why Loops?

Loops help us **repeat code** without writing it over and over.

If a task needs to be done multiple times (like printing 1–10, going through an array, or checking each character in a string), **loops are essential**.

---

## 🧮 `for` Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- Starts from `i = 0`
- Runs till `i < 5`
- Increases `i` each time

---

## 🔁 `while` Loop

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

- Condition is checked **before** running

---

## 🔂 `do-while` Loop

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

- Runs **at least once**, even if condition is false

---

## ⛔ `break` and `continue`

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // Skips 3
}
```

- `break`: Exit loop completely
- `continue`: Skip current iteration

---

## 🔄 `for-of` – Arrays & Strings

```js
for (let char of "kousik") {
  console.log(char);
}
```

- Works on anything iterable (arrays, strings)

---

## 🔁 `forEach` – Arrays

```js
let nums = [10, 20, 30];
nums.forEach((num) => {
  console.log(num);
});
```

- Cleaner than `for` for arrays
- ❌ Can’t `break` or `return`

---

## 🧭 `for-in` – Objects (and arrays if needed)

```js
let user = { name: "Kousik", age: 23 };
for (let key in user) {
  console.log(key, user[key]);
}
```

- Iterates over object keys
- ⚠️ Not ideal for arrays

---

## ⚠️ Common Confusions

- `for-in` is **for objects**, not arrays
- `forEach` ❌ can't use `break` or `continue`
- `while` and `do-while` best when number of iterations is **unknown**

---

## 🧠 Mindset

Loops = **data processor**.

| Loop Type | Best Use |
|-----------|-----------|
| `for`     | Numbers, indexes |
| `for-of`  | Array values |
| `for-in`  | Object keys |
| `while`   | Unpredictable conditions |

---

## 🧪 Practice Zone

1. Print 1 to 10 using `for`
2. Print even numbers between 1 to 20
3. Reverse a string using loop
4. Sum all numbers in an array
5. Print all characters of a name using `for-of`
6. Print all object keys and values using `for-in`
7. Use `continue` to skip a specific number
8. Guess number game – use `while` to ask until correct
9. Pattern: Print triangle using `*`
10. Sum of even numbers in an array using `forEach`

---

Happy looping! 🚀