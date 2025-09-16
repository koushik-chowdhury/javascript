// Create an object for a student with name, age and isEnrolled

let student = {
  name: "kousik",
  age: 23,
  isEnrolled: true,
};
console.log(student);

// Given a dynamic key let key = "age", how will you access user[key]?

let key = "age";
const user = {
  age: 23,
};
console.log(user[key]);

// Use Object.entries() to print all key-value pairs as:
// title: Javascript
// duration: 4 weeks
const course = {
  title: "javascript",
  duration: "4 weeks",
};
Object.entries(course).forEach((val) => {
  console.log(`${val[0]} :${val[1]}`);
});
