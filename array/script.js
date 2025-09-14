let marks = [40, 50, 60, 45];

// ----------------------
// Accessing elements
// ----------------------
console.log("First element:", marks[0]);  // 40
console.log("Last element:", marks[3]);   // 45

// ----------------------
// Slice (copy part of array)
// ----------------------
let newMarks = marks.slice(0, 3);
console.log("New Marks (slice 0-3):", newMarks); // [40, 50, 60]
console.log("Original Marks:", marks);           // [40, 50, 60, 45]

// ----------------------
// Reverse
// ----------------------
console.log("Reversed:", marks.reverse());

// ----------------------
// Sort (default and numeric)
// ----------------------
// ⚠ Default sort is lexicographic (string-based)
console.log("Default Sort:", marks.sort());

let sortMarks = marks.sort((a, b) => a - b);
console.log("Numeric Sort (ascending):", sortMarks);

// ----------------------
// forEach
// ----------------------
console.log("forEach (+5 to each, but does not change original):");
marks.forEach(val => {
  val += 5;
  console.log(val);
});

// ----------------------
// map
// ----------------------
let ans = marks.map(val => 12);
console.log("Map (returns all 12s):", ans);

// ----------------------
// filter
// ----------------------
let filteredMarks = marks.filter(val => val > 50);
console.log("Filter (>50):", filteredMarks);

// ----------------------
// reduce
// ----------------------
let sumOfMarks = marks.reduce((acc, val) => acc + val, 0);
console.log("Reduce (sum):", sumOfMarks);

// ----------------------
// find
// ----------------------
let findNum = marks.find(val => val === 60);
console.log("Find (60):", findNum);

// ----------------------
// destructuring
// ----------------------
let [first, second] = marks
console.log("first",first) 
console.log("second",second) 

// ----------------------
// spread operator
// ----------------------
let copyOfMarks = [...marks]