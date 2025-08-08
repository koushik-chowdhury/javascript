// 1. Write a function to check if a number is even or odd

function oddEven(num) {
  if (num % 2 === 0) {
    return `${num} is Even`;
  } else {
    return `${num} is Odd`;
  }
}
let res = oddEven(20);
console.log(res);

// 2. Create a function to convert temperature from celsius to fahrenheit

function celTof(temperature) {
  res = (temperature * (9 / 5) + 32).toFixed(1);
  console.log(res);
}

celTof(52);

// 3. Write a function that return the square of a number

function square(num) {
  console.log(num ** 2);
}
square(10);

// 4. Create a function that reverses a given string

function reverse(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[str.length - i - 1]);
  }
}
reverse("koushik");

// 5. Build a function that returns the max of three numbers.

function max(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num1 && num2 > num3) return num2;
  else return num3;
}
let maxNum = max(100, 500, 50);
console.log(maxNum);

// 6. Write a function to find the factorial using recursion.

// 7. Create a function that checks if a number is prime.

function prime(num) {
  let flag = 0;
  for (i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      flag = 1;
    }
  }
  if (flag === 0) {
    console.log("Not Prime");
  } else {
    console.log("Prime");
  }
}
prime(18);

// 8. Write a function that returns the fibonacci sequence up to n terms.

function fib(n) {
  let f1 = 0;
  let f2 = 1;
  console.log(f1);
  if (f2) {
    console.log(f2);
  }
  for (let i = 2; i < n; i++) {
    let next = f1 + f2;
    console.log(next);
    f1 = f2;
    f2 = next;
  }
}
fib(10);

// Method 2

function fib2(n) {
  let f1 = 0,
    f2 = 1;
  for (let i = 0; i < n; i++) {
    console.log(f1);
    f2 = f1 + f2;
    f1 = f2 - f1;
  }
}
fib2(10);

// 9. Create a calculator function using a higher order function.

// 10. Implement a timer using setTimeout inside a function

// 11. Write a BMI Calculator

function bmi(weight, height) {
  console.log(weight / (height * height).toFixed(2));
}
bmi(53, 1.66);

// 12. Create reusable discount calculator (HOF)

function discount(discountVal) {
  return function (price) {
    return price - price * (discountVal / 100);
  };
}
let discounter = discount(10);
console.log(discounter(200));

// 13. Create a counter using closur.

function counter() {
  let val = 0;
  return function () {
    val++;
    console.log(val)
  };
}
let count = counter()
count()
count()
count()

// 14. use IIFE to isolate variable.
