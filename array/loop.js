// 🟢 Beginner Questions

// 1. Use forEach to print every element in [1, 2, 3, 4, 5].
// 2. Use map to create a new array with each number in [2, 4, 6] multiplied by 3.
// 3. Use filter to get only even numbers from [1, 2, 3, 4, 5, 6].
// 4. Use reduce to calculate the sum of [10, 20, 30, 40].

// 1
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
  console.log(val);
});

// 2
let arr2 = [2, 4, 6];
let multipliedArr = arr2.map((val) => {
  return val * 3;
});
console.log(multipliedArr);

// 3
let arr3 = [1, 2, 3, 4, 5, 6];
let evenArr = arr3.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArr)
