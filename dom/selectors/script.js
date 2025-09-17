let heading = document.querySelector("h1");
console.dir(heading);
heading.textContent = "Hello Koushik ";
// heading.hidden = true;

let a = document.querySelector("a");
console.dir(a);
// a.href = 'https://www.google.com'
a.setAttribute("href", "https://www.youtube.com");

let img = document.querySelector('img')
img.setAttribute('src','https://plus.unsplash.com/premium_photo-1757322537632-90e4b64181f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
console.log(img.getAttribute('src'))
img.removeAttribute('src')