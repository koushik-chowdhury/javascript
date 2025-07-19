// 1. Print 1 to 10 using `for`
// 2. Print even numbers between 1 to 20
// 3. Reverse a string using loop
// 4. Sum all numbers in an array
// 5. Print all characters of a name using `for-of`
// 6. Print all object keys and values using `for-in`
// 7. Use `continue` to skip a specific number
// 8. Guess number game – use `while` to ask until correct
// 9. Pattern: Print triangle using `*`
// 10. Sum of even numbers in an array using `forEach`

// 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3
let username = "kousik";

for (let i = 0; i < username.length; i++) {
  console.log(username[username.length - i - 1]);
}

// 4 [using for loop]
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += i;
}
console.log(sum);

// 5 [using for loop]

for (let i = 0; i < username.length; i++) {
  console.log(username[i]);
}

// 7

for (let i = 0; i <= 10; i++) {
  if (i === 3) continue;
  console.log(i);
}

// 9
let res = 0
for(let i = 0; i<=100;i++){
  if(i%2==0){
    res += i
  }
 
}
 console.log(res)
// solution of the remaining question
