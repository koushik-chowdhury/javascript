// =====================
// 1. Object Definition
// =====================
let obj = {
    name: "koushik",
    surname: "chowdhury",
    address: {
        village: "nageswarpur",
        city: "malda"
    }
};
console.log("Original Object:", obj);

// =====================
// 2. Destructuring
// =====================
let { name, surname, address: { village } } = obj;
console.log("Destructured:", `${name} ${surname} ${village}`);

// =====================
// 3. Looping in Object
// =====================

// for...in (iterates keys)
console.log("Looping with for...in:");
for (let key in obj) {
    console.log(key);
}

// Object.keys (array of keys)
console.log("Object.keys:", Object.keys(obj));

// Object.entries (array of [key, value] pairs)
console.log("Object.entries:", Object.entries(obj));

// =====================
// 4. Copying Objects
// =====================

// Shallow copy (spread operator)
let obj2 = { ...obj };
obj2.address.city = "kolkata"; // affects both obj & obj2 (because of shallow copy)
console.log("After shallow copy modification:");
console.log("obj:", obj);
console.log("obj2:", obj2);

// Deep copy (JSON method)
let obj3 = JSON.parse(JSON.stringify(obj));
obj3.address.city = "malda"; // does not affect obj or obj2
console.log("After deep copy modification:");
console.log("obj3:", obj3);
console.log("obj2:", obj2);
console.log("obj:", obj);
