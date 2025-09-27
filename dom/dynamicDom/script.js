let h1 = document.createElement("h1");
h1.textContent = "hello koushik";
console.log(h1);
document.body.appendChild(h1);
let p = document.createElement("p");
p.textContent = "hello para";
document.body.prepend(p);

// h1.style.color = 'red'

console.dir(document.body);
h1.classList.add("style");
h1.classList.remove("style");
h1.classList.add("modern");

let characters = ["Nobita", "Sizuka", "Doraemon", "Gian", "Sunio"];
let orderdList = document.createElement("ol");
document.body.appendChild(orderdList)
characters.forEach((char) => {
 let list = document.createElement("li");
 list.textContent = `${char} `
  orderdList.appendChild(list)
});