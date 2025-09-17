# 📘 Documentation of the Code

## 1. **Selectors**
Selectors are used to grab elements from the DOM (Document Object Model) so that you can manipulate them with JavaScript.

```js
let heading = document.querySelector("h1"); // selects the first <h1>
let a = document.querySelector("a");        // selects the first <a>
let img = document.querySelector("img");    // selects the first <img>
```

---

## 2. **Inspecting Elements**

```js
console.dir(heading);
```
- Prints the DOM object of the element in the console.  
- Useful to see all properties & methods.

---

## 3. **Text Manipulation**

```js
heading.textContent = "Hello Koushik "; // changes text inside <h1>

// heading.hidden = true;  // hides the <h1> element if uncommented
```

- `.textContent` → sets/retrieves all text inside an element.  
- `.hidden` → hides the element when set to `true`.

---

## 4. **Attribute Manipulation**

### ✅ Using **Properties**
```js
a.href = 'https://www.google.com';
```

### ✅ Using **Methods**
```js
a.setAttribute("href", "https://www.youtube.com"); // sets new href
console.log(img.getAttribute("src"));              // gets value of src
img.removeAttribute("src");                        // removes src
```

---

## 5. **Image Example**

```js
img.setAttribute(
  'src',
  'https://plus.unsplash.com/premium_photo-1757322537632-90e4b64181f7?q=80&w=1170&auto=format&fit=crop'
);

img.removeAttribute('src'); // removes the image
```


---

## 7. **Extra Notes**

### Difference between `textContent`, `innerText`, `innerHTML`
| Property       | What it does                                                                 |
|----------------|------------------------------------------------------------------------------|
| `.textContent` | Gets/sets all text (including hidden text).                                  |
| `.innerText`   | Gets/sets only visible text (ignores hidden).                                |
| `.innerHTML`   | Gets/sets HTML markup (you can insert tags like `<b>Bold</b>`).              |

### When to use `.setAttribute` vs `.property`
| Method                  | Use case                                                                 |
|--------------------------|--------------------------------------------------------------------------|
| `element.href` / `element.src` | Best for common attributes like links and images.                  |
| `element.setAttribute()` | Best for custom or less common attributes.                              |
| `element.getAttribute()` | Retrieves the original attribute value (not always the resolved one).    |
| `element.removeAttribute()` | Deletes the attribute entirely.                                      |

---

## 8. **Cheat Sheet**

| Concept             | Method / Property                     | Description                                  | Example |
|----------------------|----------------------------------------|----------------------------------------------|---------|
| **Selector**         | `querySelector("h1")`                 | Selects first matching element               | `let h1 = document.querySelector("h1")` |
| **Inspect**          | `console.dir(element)`                | Logs element as an object                    | `console.dir(heading)` |
| **Text change**      | `element.textContent`                 | Change text inside element                   | `heading.textContent = "Hello"` |
| **Hide element**     | `element.hidden = true`               | Hides the element                            | `heading.hidden = true` |
| **Set attribute**    | `element.setAttribute(name, value)`   | Add or update an attribute                   | `a.setAttribute("href","https://yt.com")` |
| **Get attribute**    | `element.getAttribute(name)`          | Get attribute value                          | `img.getAttribute("src")` |
| **Remove attribute** | `element.removeAttribute(name)`       | Remove attribute                             | `img.removeAttribute("src")` |