// Create an array with 3 fruits and print the second fruit
let fruits = ["apple", "banana", "mango", "water melon", "dragon fruit"];
console.log(fruits[1]);

// Add 'guava' at the end and 'pineapple' at the beginning of this array
fruits.push("guava");
fruits.unshift("pineapple");
// fruits = ['pineapple',...fruits,'guava']

console.log(fruits);

// Replace 'banana' with 'kiwi' in the array
let index = fruits.indexOf("banana");
fruits[index] = "kiwi";
console.log(fruits);

// let fruits = ["apple", "banana", "mango", "banana"];
// let newFruits = fruits.map(fruit => fruit === "banana" ? "kiwi" : fruit);
// console.log(newFruits);

// Remove the last item from this array using a method
let returnedItem = fruits.pop();
console.log(fruits);
console.log(returnedItem);

// Insert 'orange at index 1'
fruits.splice(1, 0, "orange");
console.log(fruits);

// sort the array alphabetically and then reverse it
fruits.sort().reverse();
console.log(fruits);

// --------------------------
// INTEGER ARRAY
// --------------------------

// Use map() to square each number:
let nums = [10, 12, 18, 20, 6, 8, 5, 9, 11];
let squareNums = nums.map((num) => {
  return num * num;
});
console.log(squareNums);

// use filter() to keep numbers greater than 10
let filterdNums = nums.filter((num) => {
  return num > 10;
});
console.log(filterdNums);

// use reduce() to find the sum of this array
let sum = nums.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(sum);

// use find() to get the first number less than 10
let lesserValue = nums.find((num) => {
  return num < 10;
});
console.log(lesserValue);

// use some() to check if any student has scored below 35
let failedStudent = nums.some((num)=>{
    return num < 10
})
console.log(failedStudent)

// use every() to check if all numbers are even
let even = nums.every((num)=>{
    return num%2===0
})
console.log(even)

// -----------------
// ANOTHER ARRAY
// -----------------

// Destructure this array to get firstName and lastName
let fullName = ['kousik','chowdhury']
let [fName, Lname] = fullName
console.log(fName)
console.log(Lname)

