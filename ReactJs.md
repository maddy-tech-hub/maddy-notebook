# Complete Web Development Guide

## Introduction to Web Development

Before learning React, understanding core web technologies is essential.

### Core Web Technologies

- **HTML (HyperText Markup Language)**  
  Defines the structure of web pages using elements like headings, paragraphs, images, and links.

- **CSS (Cascading Style Sheets)**  
  Styles web pages, making them visually appealing and responsive.

- **JavaScript**  
  Adds interactivity, handles user input, fetches data, and modifies the DOM.

With a strong foundation in these, we move to **React**, a library for building modern web applications with a component-based approach.

---

## HTML (HyperText Markup Language)

This guide provides a comprehensive understanding of HTML, covering its fundamental concepts, advanced features, and best practices with detailed examples.

---

## **1. Introduction to HTML**

### **1.1 What is HTML?**
HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using elements and tags.

### **1.2 Why Use HTML?**
- Defines the structure of web content
- Supports multimedia elements
- Works with CSS & JavaScript for styling and interactivity
- SEO-friendly structure
- Cross-browser compatibility
- Forms the backbone of web applications

---

## **2. HTML Document Structure**

Every HTML document follows a basic structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
</body>
</html>
```

- `<!DOCTYPE html>`: Declares the document type
- `<html>`: The root element
- `<head>`: Contains metadata and links
- `<meta charset="UTF-8">`: Defines character encoding
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Ensures responsiveness
- `<body>`: Contains visible page content

---

## **3. Common HTML Elements**

### **3.1 Headings & Paragraphs**
```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph of text.</p>
```

### **3.2 Links & Anchors**
```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```

### **3.3 Images**
```html
<img src="image.jpg" alt="Description of image" width="300">
```

### **3.4 Lists**
#### **Unordered List:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```
#### **Ordered List:**
```html
<ol>
    <li>First Item</li>
    <li>Second Item</li>
</ol>
```

### **3.5 Tables**
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
    </tr>
</table>
```

---

## **4. Forms & Input Elements**

### **4.1 Basic Form**
```html
<form action="submit.php" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <button type="submit">Submit</button>
</form>
```

### **4.2 Different Input Types**
```html
<input type="email" placeholder="Enter your email" required>
<input type="password" placeholder="Enter password" required>
<input type="date">
<input type="checkbox"> Accept Terms
```

### **4.3 Radio Buttons & Select Dropdown**
```html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female

<select>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
</select>
```

---

## 5. Semantic HTML 🏷️

Semantic HTML means using HTML tags that describe their meaning — not just their appearance.

Instead of using `<div>`s everywhere, use **semantic elements** like:

- `<header>` – Top section (logo, title, nav)
- `<nav>` – Navigation links
- `<main>` – Main page content
- `<section>` – Logical group of content
- `<article>` – A full piece of content (blog post, news)
- `<aside>` – Sidebar or extra info
- `<footer>` – Bottom of the page (contact, copyright)

### 💡 Why It Matters:

✅ **Better SEO(Search Engine Optimization)** – Search engines understand your content  
✅ **Better Accessibility** – Screen readers can navigate easily  
✅ **Cleaner Code** – Easier to read and maintain  

---

### 🧪 Real-World Example: A Simple Blog Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Blog</title>
</head>
<body>

  <header>
    <h1>📝 My Awesome Blog</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <section>
      <article>
        <h2>Post Title</h2>
        <p>This is my first blog post using semantic HTML!</p>
      </article>
    </section>
    
    <aside>
      <h3>About Me</h3>
      <p>I'm a web developer sharing my journey.</p>
    </aside>
  </main>

  <footer>
    <p>© 2025 My Blog. All rights reserved.</p>
  </footer>

</body>
</html>
```

---

## **6. HTML5 Features**

### **6.1 Multimedia Elements**
#### **Audio**
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

#### **Video**
```html
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
</video>
```

### **6.2 Canvas for Drawing**
Draw graphics (games, charts, etc.) with JavaScript.
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```
```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 150, 75);
```

### **6.3 HTML5 Forms Enhancements**
- `required` attribute for mandatory fields
- `pattern` for input validation
- `placeholder` for better user experience

### 6.4 Geolocation API
- Get user’s location (with permission):
```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
```

### 6.5 Web Workers
```js
const worker = new Worker("worker.js");
worker.postMessage("start");
```

---

## **7. Advanced Concepts**

### **7.1 Responsive Design with HTML & Meta Tags**
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### **7.2 HTML & JavaScript Interaction**
```html
<button onclick="alert('Hello!')">Click Me</button>
```

### **7.3 Web Storage (LocalStorage & SessionStorage)**
```html
<script>
localStorage.setItem("username", "Alice");
alert(localStorage.getItem("username"));
</script>
```

### **7.4 Accessibility Best Practices**
- Use `alt` attributes for images
- Ensure proper heading hierarchy
- Use `aria` attributes for better screen reader support

### **7.5 SEO Best Practices**
- Use proper heading structure
- Add meta tags (`description`, `keywords`)
- Optimize images with `alt` attributes
- Use semantic elements (`<article>`, `<section>`, `<nav>`, etc.)

---

## **8. Interview Questions & Answers**

### **8.1 Basic Questions**
1. What is HTML?
2. What are HTML semantic elements?
3. Difference between `<div>` and `<span>`?

### **8.2 Advanced Questions**
1. What are the new features of HTML5?
2. Explain the difference between localStorage and sessionStorage.
3. How do you improve website accessibility using HTML?

---
## CSS (Cascading Style Sheets)

This guide provides a comprehensive understanding of CSS, covering fundamental concepts, advanced features, and best practices with detailed examples.

---

## **1. Introduction to CSS**

### **1.1 What is CSS?**

CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of web pages.

### **1.2 Why Use CSS?**

- Separates content from design
- Enhances user experience with better visuals
- Enables responsive design
- Supports tions and interactivity
- Improves maintainability and reusability

---

## **2. CSS Basics**

### **2.1 Selectors & Properties**

```css
/* Element Selector */
h1 {
    color: blue;
}

/* Class Selector */
.paragraph {
    font-size: 16px;
}

/* ID Selector */
#main {
    background-color: lightgray;
}
```

### **2.2 Box Model**

CSS Box Model consists of:

- **Content** (Text, images, etc.)
- **Padding** (Space around content)
- **Border** (Encapsulation of padding)
- **Margin** (Space outside the border)

```css
div {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

---

## **3. CSS Layouts**

### **3.1 Flexbox**

CSS Flexbox is used to create flexible and responsive layouts.

#### **3.1.1 Flexbox Properties**

**Container Properties:**

- `display: flex;` → Enables Flexbox
- `flex-direction: row | column | row-reverse | column-reverse;` → Defines the direction of items
- `justify-content: flex-start | center | space-between | space-around | space-evenly;` → Aligns items horizontally
- `align-items: flex-start | center | flex-end | stretch;` → Aligns items vertically
- `flex-wrap: nowrap | wrap | wrap-reverse;` → Controls wrapping of items

**Item Properties:**

- `flex-grow: 1;` → Defines growth ratio
- `flex-shrink: 1;` → Defines shrink ratio
- `flex-basis: auto;` → Sets initial size
- `align-self: auto | flex-start | center | flex-end;` → Aligns an individual item

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.item {
    flex-grow: 1;
}
```

### **3.2 CSS Grid**

CSS Grid is used to create complex and responsive layouts.

#### **3.2.1 Grid Properties**

- `display: grid;` → Enables Grid
- `grid-template-columns: 1fr 2fr 1fr;` → Defines column sizes
- `grid-template-rows: auto;` → Defines row sizes
- `gap: 10px;` → Sets spacing between grid items
- `justify-items: start | center | end;` → Aligns items horizontally
- `align-items: start | center | end;` → Aligns items vertically

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
}

.grid-item {
    background-color: lightblue;
}
```

---

## **4. Responsive Design**

### **4.1 Media Queries**

```css
@media (max-width: 600px) {
    body {
        background-color: lightgray;
    }
}
```

---

## **5. Advanced CSS**

### **5.1 Animations & Transitions**

```html
<button class="fancy-button">Click Me</button>
```
```css
.fancy-button {
  background-color: #4CAF50;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  /* 🔄 This is the TRANSITION */
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.fancy-button:hover {
  background-color: #45a049;

  /* 🎯 This is the ANIMATION */
  animation: bounce 0.6s;
}

/* 🎬 Keyframes for the bounce ANIMATION */
@keyframes bounce {
  0%   { transform: translateY(0); }
  30%  { transform: translateY(-10px); }
  60%  { transform: translateY(5px); }
  100% { transform: translateY(0); }
}
```

### **5.2 CSS Variables**

```css
:root {
    --primary-color: blue;
}

h1 {
    color: var(--primary-color);
}
```

---
# JavaScript (JS) & TypeScript (TS)

This guide covers essential JavaScript and TypeScript concepts, including core fundamentals, modern features, and best practices.

---

## **JavaScript (JS)**

### **1. JavaScript Basics**

#### **1.1 Variables**

JavaScript has three ways to declare variables:

- `var`: Function-scoped, can be redeclared.
- `let`: Block-scoped, can be reassigned.
- `const`: Block-scoped, cannot be reassigned.

```js
var a = 10;
let b = 20;
const c = 30;
```

---

#### **1.2 Data Types**

JavaScript has two types of data:

- **Primitive**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Reference**: `array`, `object`, `function`

```js
let name = "John"; // string
let age = 25; // number
let isStudent = false; // boolean
let skills = ["JS", "React"]; // array
let person = { firstName: "John", lastName: "Doe" }; // object
```

---

### **2. Operators**

#### **2.1 Arithmetic Operators**

```js
let x = 5;
let y = 2;
console.log(x + y); // 7
console.log(x - y); // 3
console.log(x * y); // 10
console.log(x / y); // 2.5
console.log(x % y); // 1
```

#### **2.2 Comparison Operators**

```js
console.log(10 > 5); // true
console.log(10 === "10"); // false (strict comparison)
console.log(10 == "10"); // true (loose comparison)
```

---

### **3. Functions**

#### **3.1 Function Declaration**

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
```

#### **3.2 Arrow Functions**

```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));
```

---

### **4. Control Structures**

#### **4.1 Conditional Statements**

```js
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

#### **4.2 Loops**

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
```

---

### **5. Event Handling & DOM Manipulation**

#### **5.1 Handling Events**

```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Button Clicked!");
});
```

#### **5.2 Manipulating the DOM**

```js
let element = document.createElement("p");
element.textContent = "Hello, DOM!";
document.body.appendChild(element);
```

---

### **6. ES6+ Features**

#### **6.1 Destructuring**

```js
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age);
```

#### **6.2 Spread & Rest Operators**

```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
```

#### **6.3 Template Literals**

```js
const name = "Alice";
console.log(`Hello, ${name}!`);
```

#### **6.4 Promises & Async/Await**

```js
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};
fetchData();
```

---

### **7. Advanced JavaScript Concepts**
---

#### **7.1 Closures**

**What is it?**  
A closure is a function that "remembers" the variables from its outer scope even after the outer function has finished executing.

**How it works:**  
When a function is returned from another function, it retains access to the variables in its lexical scope.

**Example:**
```js
function outer() {
  let count = 0; // Variable in the outer scope
  return function inner() {
    count++; // Inner function has access to `count`
    console.log("Count:", count);
  };
}

const counter = outer();
counter(); // Count: 1
counter(); // Count: 2
```

**Why it's important:**  
Closures are widely used in JavaScript for data encapsulation, creating private variables, and callback functions.

---

#### **7.2 Hoisting**

**What is it?**  
Hoisting is JavaScript's default behavior of moving declarations (variables and functions) to the top of their scope before code execution.

### **Comparison Table: Hoisting Behavior**

| **Type**                | **Hoisted?** | **Initialized?** | **Can Call Before Declaration?** | **Example**                                                                 |
|--------------------------|--------------|-------------------|------------------------------------|-----------------------------------------------------------------------------|
| `var`                   | ✅ Yes       | ✅ Initialized to `undefined` | ✅ Yes                             | `console.log(a); var a = 10;` → Prints `undefined`                          |
| `let`                   | ✅ Yes       | ❌ Not initialized | ❌ No (TDZ)                        | `console.log(b); let b = 20;` → ReferenceError                              |
| `const`                 | ✅ Yes       | ❌ Not initialized | ❌ No (TDZ)                        | `console.log(c); const c = 30;` → ReferenceError                            |
| Function Declaration    | ✅ Yes       | ✅ Fully hoisted   | ✅ Yes                             | `sayHi(); function sayHi() {}` → Works perfectly                            |
| Function Expression     | ✅ Yes       | ❌ Not initialized | ❌ No                              | `greet(); var greet = function () {}` → TypeError                           |
| Arrow Function          | ✅ Yes       | ❌ Not initialized | ❌ No                              | `sayHello(); var sayHello = () => {}` → TypeError                           |

---

#### **1. Hoisting with `var`**

`var` declarations are hoisted and initialized with `undefined`.

```js
console.log(a); // 👉 undefined
var a = 10;
```

**Behind the Scenes:**
```js
var a;          // 💡 Declaration is hoisted to the top and initialized with undefined
console.log(a); // 👉 Prints undefined
a = 10;         // ✅ Assigned later at runtime
```

---

#### **2. Hoisting with `let` and `const`**

`let` and `const` are hoisted but are not initialized. Accessing them before their declaration results in a **ReferenceError** due to the **Temporal Dead Zone (TDZ)**.

```js
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ❌ ReferenceError
const c = 30;
```

**Behind the Scenes:**
```js
// Temporal Dead Zone (TDZ)
let b;    // 🧨 Hoisted, but not initialized
const c;  // 🧨 Hoisted, but not initialized

// ❌ Accessing `b` or `c` before this point will throw ReferenceError
```

---

#### **3. Hoisting with Function Declarations**

Function declarations are **fully hoisted**, meaning both the name and the body of the function are moved to the top of their scope. This allows you to call the function before its declaration.

```js
sayHi(); // ✅ Works perfectly
function sayHi() {
  console.log("Hello from hoisted function!");
}
```

**Behind the Scenes:**
```js
// Function declaration is hoisted completely
function sayHi() {
  console.log("Hello from hoisted function!");
}

sayHi(); // 👉 Can be safely called here
```

---

#### **4. Hoisting with Function Expressions**

Function expressions are **not fully hoisted**. Only the variable declaration is hoisted, but the function itself is not assigned until runtime. This results in a **TypeError** if you try to call the function before its assignment.

```js
greet(); // ❌ TypeError: greet is not a function
var greet = function () {
  console.log("Hi from function expression!");
};
```

**Behind the Scenes:**
```js
var greet;       // ✅ `var` is hoisted and initialized with undefined
greet();         // ❌ Error because `greet` is undefined at this point
greet = function () {
  console.log("Hi from function expression!");
};
```

---

#### **5. Hoisting with Arrow Functions**

Arrow functions behave like function expressions. They are **not fully hoisted**, and only the variable declaration is hoisted. Attempting to call the arrow function before its assignment results in a **TypeError**.

```js
sayHello(); // ❌ TypeError: sayHello is not a function

var sayHello = () => {
  console.log("👋 Hello from arrow function!");
};
```

**Behind the Scenes:**
```js
var sayHello;      // ✅ `var` is hoisted and initialized to undefined

sayHello();        // ❌ TypeError: sayHello is not a function

sayHello = () => {
  console.log("👋 Hello from arrow function!");
};
```

---

### **Key Takeaways**

1. **`var`** is hoisted and initialized to `undefined`, so it can be accessed before its declaration (but will be `undefined`).
2. **`let` and `const`** are hoisted but not initialized, so accessing them before their declaration results in a **ReferenceError**.
3. **Function declarations** are fully hoisted, so they can be called before their declaration.
4. **Function expressions and arrow functions** are not fully hoisted, so calling them before their assignment results in a **TypeError**.

This structured explanation with examples and behind-the-scenes behavior ensures a clear understanding of hoisting in JavaScript.

**Why it's important:**  
Understanding hoisting helps avoid bugs caused by accessing variables or functions before they are defined.

---

#### **7.3 Deep Copy vs Shallow Copy**

**What is it?**  
- **Shallow Copy**: Copies only the first level of an object. Changes to nested objects affect both the original and the copy.
- **Deep Copy**: Creates a completely independent copy of an object, including all nested objects.

**How it works:**

**Shallow Copy Example:**
```js
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj }; // Shallow copy
shallowCopy.b.c = 42;
console.log(obj.b.c); // 42 (nested object is shared)
```

**Deep Copy Example:**
```js
const obj = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj)); // Deep copy
deepCopy.b.c = 42;
console.log(obj.b.c); // 2 (nested object is independent)
```

**Why it's important:**  
Understanding the difference is crucial when working with objects to avoid unintended side effects.

---

#### **7.4 Promises & Async/Await**

**What is it?**  
- **Promises**: Represent the eventual completion (or failure) of an asynchronous operation.
- **Async/Await**: A cleaner syntax for working with Promises.

**How it works:**
**Promises Example:**
```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
};

fetchData().then((data) => console.log(data)).catch((error) => console.error(error));
```

**Async/Await Example:**
```js
const fetchData = async () => {
  try {
    const data = await new Promise((resolve) => setTimeout(() => resolve("Data fetched!"), 1000));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
```

**Why it's important:**  
Promises and async/await are essential for handling asynchronous operations in a readable and maintainable way.

---

#### **7.5 Array Methods Mastery
![image](https://github.com/user-attachments/assets/10d30b84-c826-467a-aea6-35ba133a6119)

### JavaScript Array Methods and Their C# Equivalents

| **JavaScript Method** | **C# Equivalent** | **JavaScript Example** | **JavaScript Output** | **C# Output** | **C# Example** |
|------------------------|-------------------|--------------------------|------------------------|----------------|----------------|
| **map()**              | `Select()`        | `let doubled = [1,2,3].map(n => n * 2);` | `[2, 4, 6]` | `2, 4, 6` | `numbers.Select(n => n * 2).ToArray();` |
| **filter()**           | `Where()`         | `let even = [1,2,3,4,5].filter(n => n % 2 === 0);` | `[2, 4]` | `2, 4` | `numbers.Where(n => n % 2 == 0).ToArray();` |
| **reduce()**           | `Aggregate()`     | `let sum = [1,2,3,4].reduce((a,b) => a + b);` | `10` | `10` | `numbers.Aggregate((a,b) => a + b);` |
| **forEach()**          | `ForEach()`       | `[1,2,3].forEach(n => console.log(n));` | `1, 2, 3` | `1, 2, 3` | `numbers.ToList().ForEach(n => Console.WriteLine(n));` |
| **some()**             | `Any()`           | `[1,2,3].some(n => n % 2 === 0);` | `true` | `True` | `numbers.Any(n => n % 2 == 0);` |
| **every()**            | `All()`           | `[1,2,3].every(n => n < 4);` | `true` | `True` | `numbers.All(n => n < 4);` |
| **indexOf()**          | `IndexOf()`       | `[1,2,3].indexOf(2);` | `1` | `1` | `Array.IndexOf(numbers, 2);` |
| **find()**             | `FirstOrDefault()`| `[1,2,3].find(n => n > 1);` | `2` | `2` | `numbers.FirstOrDefault(n => n > 1);` |
| **findIndex()**        | `FindIndex()`     | `[1,2,3].findIndex(n => n > 1);` | `1` | `1` | `numbers.ToList().FindIndex(n => n > 1);` |
| **concat()**           | `Concat()`        | `[1,2].concat([3,4]);` | `[1, 2, 3, 4]` | `1, 2, 3, 4` | `arr1.Concat(arr2).ToArray();` |
| **slice()**            | `Skip() + Take()` | `[1,2,3,4].slice(1, 3);` | `[2, 3]` | `2, 3` | `numbers.Skip(1).Take(2).ToArray();` |
| **splice()**           | `Insert() / RemoveAt()` | `let a = [1,2,3]; a.splice(1,1);` | `[1, 3]` | `1, 3` | `list.RemoveAt(1);` |
| **sort()**             | `OrderBy()`       | `[3,1,2].sort();` | `[1, 2, 3]` | `1, 2, 3` | `numbers.OrderBy(n => n).ToArray();` |
| **reverse()**          | `Reverse()`       | `[1,2,3].reverse();` | `[3, 2, 1]` | `3, 2, 1` | `Array.Reverse(numbers);` |
| **push()**             | `Add()`           | `let a = [1,2]; a.push(3);` | `[1, 2, 3]` | `1, 2, 3` | `list.Add(3);` |
| **pop()**              | `RemoveAt()`      | `let a = [1,2,3]; a.pop();` | `[1, 2]` | `1, 2` | `list.RemoveAt(list.Count - 1);` |
| **shift()**            | `RemoveAt(0)`     | `let a = [1,2,3]; a.shift();` | `[2, 3]` | `2, 3` | `list.RemoveAt(0);` |
| **unshift()**          | `Insert(0, val)`  | `let a = [1,2]; a.unshift(0);` | `[0, 1, 2]` | `0, 1, 2` | `list.Insert(0, 0);` |

---

#### **7.6 Event Loop**

**What is it?**  
The event loop is a mechanism in JavaScript that handles asynchronous operations by managing the execution of the call stack and the task queue.

**How it works:**
1. JavaScript executes code in the **call stack**.
2. Asynchronous tasks (e.g., `setTimeout`, Promises) are sent to the **task queue** or **microtask queue**.
3. The event loop checks if the call stack is empty and then pushes tasks from the queue to the stack.

**Example:**
```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output:**
```
Start
End
Promise
Timeout
```

**Why it's important:**  
Understanding the event loop is crucial for debugging asynchronous code and avoiding issues like race conditions.

---


#### **7.7 Debouncing & Throttling**

**What is it?**  
- **Debouncing**: Ensures a function is executed only after a specified delay since the last time it was invoked.
- **Throttling**: Ensures a function is executed at most once in a specified interval.

**How it works:**

**Debouncing Example:**
```js
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const handleResize = debounce(() => {
  console.log("Resized!");
}, 300);

window.addEventListener("resize", handleResize);
```

**Throttling Example:**
```js
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scrolled!");
}, 1000);

window.addEventListener("scroll", handleScroll);
```

**Why it's important:**  
Debouncing and throttling are essential for optimizing performance in scenarios like handling scroll, resize, or input events.

---

#### **7.8 Currying**

**What is it?**  
Currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

**How it works:**
```js
function add(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(3)); // 8
```

**Why it's important:**  
Currying is useful for creating reusable and composable functions.

---


## **TypeScript (TS)**

### **1. TypeScript Basics**

#### **1.1 What is TypeScript?**

TypeScript is a **strongly typed** superset of JavaScript that compiles to plain JavaScript.

#### **1.2 Why Use TypeScript?**

- Static type checking
- Better IDE support
- Improved maintainability
- Advanced object-oriented programming features

---

### **2. Type Annotations**

#### **2.1 Basic Type Annotations**

```ts
let name: string = "Alice";
let age: number = 30;
let isAdmin: boolean = true;
```

#### **2.2 Arrays and Tuples**

```ts
let numbers: number[] = [1, 2, 3];
let user: [string, number] = ["Alice", 30];
```

### **2.3 Enum Types**
```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
let move: Direction = Direction.Up;

---

### **3. Interfaces & Types**

#### **3.1 Interfaces**

```ts
interface User {
  name: string;
  age: number;
}
const user: User = { name: "Alice", age: 30 };
```
### **3.2 Extending Interfaces**
```ts
interface Employee extends User {
  role: string;
}
const employee: Employee = { name: "Bob", age: 25, role: "Developer" };
```

#### **3.3 Type Aliases**

```ts
type Car = {
  brand: string;
  year: number;
};
const car: Car = { brand: "Tesla", year: 2022 };
```
---

### **4. Functions**

#### **4.1 Function Annotations**

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

#### **4.2 Optional Parameters**

```ts
function greet(name: string, age?: number): string {
  return age ? `${name} is ${age} years old.` : `Hello, ${name}!`;
}
```

---

### **5. Classes**

#### **5.1 Class & Constructor**

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const person = new Person("Alice");
person.greet();
```

#### **5.2 Access Modifiers**

```ts
class Employee {
  private id: number;
  protected role: string;
  public name: string;

  constructor(id: number, role: string, name: string) {
    this.id = id;
    this.role = role;
    this.name = name;
  }
}
```

---

### **6. Advanced TypeScript Concepts**

#### **6.1 Generics**

```ts
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(10));
console.log(identity<string>("Hello"));
```

#### **6.2 Utility Types**

```ts
type Person = { name: string; age: number; };
type PartialPerson = Partial<Person>;
type ReadOnlyPerson = Readonly<Person>;
```

---

### **7. Modules & Namespaces**

#### **7.1 Modules**

Modules in TypeScript allow you to organize code into reusable and maintainable pieces. They use `export` and `import` keywords.

**Example: Exporting and Importing Modules**

**file1.ts**
```ts
export const greet = (name: string): string => `Hello, ${name}!`;
export const add = (a: number, b: number): number => a + b;
```

**file2.ts**
```ts
import { greet, add } from "./file1";

console.log(greet("Alice")); // Hello, Alice!
console.log(add(5, 10)); // 15
```

---

#### **7.2 Namespaces**

Namespaces are used to group related code together and avoid naming conflicts. They are useful for organizing large codebases.

**Example: Using Namespaces**

```ts
namespace MathUtils {
  export const add = (a: number, b: number): number => a + b;
  export const subtract = (a: number, b: number): number => a - b;
}

console.log(MathUtils.add(10, 5)); // 15
console.log(MathUtils.subtract(10, 5)); // 5
```

---

### **8. Type Safety**

#### **8.1 Type Guards**

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printValue(value: unknown) {
  if (isString(value)) {
    console.log(`String value: ${value}`);
  } else {
    console.log("Not a string");
  }
}

printValue("Hello"); // String value: Hello
printValue(42); // Not a string
```

#### **8.2 Discriminated Unions**

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.side ** 2;
  }
}

console.log(getArea({ kind: "circle", radius: 5 })); // 78.53981633974483
console.log(getArea({ kind: "square", side: 4 })); // 16
```

#### **8.3 `never` Type**

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function handleValue(value: string | number): string {
  if (typeof value === "string") {
    return `String: ${value}`;
  } else if (typeof value === "number") {
    return `Number: ${value}`;
  }
  // Exhaustive check
  const _exhaustiveCheck: never = value;
  return _exhaustiveCheck;
}
```

---

### **9. Decorators**

#### **9.1 Class Decorators**

```ts
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Alice";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
```

#### **9.2 Method Decorators**

```ts
function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  console.log(`Method: ${propertyName}`);
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 10)); // Method: add
```

---

### **10. TypeScript Configuration**

#### **10.1 Common Options**

```json
{
  "compilerOptions": {
    "target": "ES6", // Specify ECMAScript target version
    "module": "CommonJS", // Specify module code generation
    "strict": true, // Enable all strict type-checking options
    "outDir": "./dist", // Redirect output structure
    "rootDir": "./src", // Specify the root directory of input files
    "esModuleInterop": true // Enable compatibility with ES modules
  }
}
```

---
# React.js

## **1. Getting Started with React**

### **1.1 What is React?**

React is a **JavaScript library** for building UI components efficiently.

### **1.2 Why React?**

- Component-Based Architecture
- Virtual DOM for efficient rendering
- Reusable UI Components
- Strong Community Support

### **1.3 Setting Up a React Project**

Run the following command to create a React project with TypeScript:

```sh
npx create-react-app my-app --template typescript
cd my-app
npm install
npm start
```

---

## **2. JSX & Components**

### **2.1 JSX (JavaScript XML)**

JSX allows writing HTML inside JavaScript.

```tsx
const element = <h1>Hello, React!</h1>;
```

### **2.2 Components in React**

#### **Functional Component (Modern Approach)**

```tsx
function Greeting() { return <h1>Hello, World!</h1>; }
const Greeting = () => { return <h1>Hello, World!</h1>; }
```

#### **Class Component (Older Approach)**

```tsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

---

## **3. Props in React**

### **3.1 Passing Data via Props**

```tsx
function Welcome(props: { name: string }) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### **3.2 Default Props & PropTypes**

```tsx
import PropTypes from "prop-types";

export function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Default props
Greeting.defaultProps = {
  name: "Guest",
};

// PropTypes validation
Greeting.propTypes = {
  name: PropTypes.string,
};
```

---

## **4. Hooks & Events**

### **4.1 Handling Events**

```tsx
function ButtonClick() {
  function handleClick() {
    alert("Button Clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}
```

### **4.2 React Hooks Overview**

React Hooks allow functional components to manage state and side effects without needing class components.

#### **Common Hooks & Their Use Cases**

1. **`useState`**: Manage component state.
   ```tsx
   const [count, setCount] = useState(0);
   ```

2. **`useEffect`**: Handle side effects like API calls or subscriptions.
   ```tsx
   useEffect(() => {
     console.log("Component Mounted");
   }, []);
   ```

3. **`useContext`**: Managing global state without props drilling.
   ```tsx
   const ThemeContext = React.createContext("light");
   const theme = useContext(ThemeContext);
   ```

4. **`useReducer`**: Manage complex state logic with a reducer function.
   ```tsx
   const reducer = (state, action) => {
     switch (action.type) {
       case 'increment': return state + 1;
       case 'decrement': return state - 1;
       default: return state;
     }
   };
   const [state, dispatch] = useReducer(reducer, 0);
   ```

5. **`useMemo`**: Optimize performance by memoizing computed values.
   ```tsx
   const memoizedValue = useMemo(() => computeExpensiveValue(data), [data]);
   ```

6. **`useCallback`**: Memoize function references to prevent unnecessary re-renders.
   ```tsx
   const memoizedCallback = useCallback(() => {
     handleEvent();
   }, [dependencies]);
   ```

7. **`useRef`**: Access DOM elements or persist mutable values across renders.
   ```tsx
   const inputRef = useRef<HTMLInputElement>(null);
   inputRef.current?.focus();
   ```
**Example :**
```tsx
import React, { useState, useEffect, useCallback, useMemo, useRef, useReducer } from 'react';

const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
};

export function HooksExample() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [text, setText] = useState('');
    const renderCompCountRef = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const [reducerCount, dispatch] = useReducer(reducer, 0);

    const expensiveCalculation = useMemo(() => { return count * 2; }, [count]);

    const handleButtonClick = useCallback(() => { setCount((prev) => prev + 1); }, []);

    // Without dependencies, the effect will run on every re-render
    useEffect(() => { renderCompCountRef.current += 1; });

    /* Automatically focuses the input field when the component mounts */
    useEffect(() => { inputRef.current?.focus(); }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="grid-container">
            <div className="grid-item">
                <h2>useEffect with Interval</h2>
                <p>Timer: {timer} seconds</p>
            </div>
            <div className="grid-item">
                <h2>useState</h2>
                <p>Count: {count}</p>
                <button onClick={handleButtonClick}>Increment Count</button>
            </div>
            <div className="grid-item">
                <h2>useMemo</h2>
                <p>Expensive Calculation Result: {expensiveCalculation}</p>
            </div>
            <div className="grid-item">
                <h2>useReducer</h2>
                <p>Reducer Count: {reducerCount}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
            <div className="grid-item">
                <h2>useRef</h2>
                <input
                    ref={inputRef}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type something..."
                />
                <p>Input Value: {text}</p>
            </div>
            <div className="grid-item">
                <h2>Component Render Count</h2>
                <p>{renderCompCountRef.current}</p>
            </div>
        </div>
    );
}

export default HooksExample;
```

---

## **5. Higher-Order Components (HOC)**

HOCs are functions that take a component and return an enhanced version of it.

```tsx
interface PropType {
    isLogin: boolean;
}

function HoC(WrappedComponent: React.ComponentType<PropType>) {
    return function EnhancedComponent(props: any) {
        return <WrappedComponent {...props} />;
    };
}

const WrappedComponent = (props: PropType) => {
    return <div>{props.isLogin ? 'Welcome to Wrapper Component' : 'Please Re Login'}</div>;
}

export default HoC(WrappedComponent);
---
// Usage
<HoC isLogin={true} />
```

---

## **6. Context API (Global State Management)**

The **Context API** in React is a built-in solution for managing global state. It eliminates the need for **prop drilling**, where props are passed down multiple levels of components.

```tsx
import React, { createContext, useContext, useState } from 'react';

const ContextCreation = createContext({count: 0, setCount: (count: number) => {}});

export const Provider = ({ children }: any) => {
  const [count, setCount] = useState(0);
  return (
    <ContextCreation.Provider value={{ count, setCount }}>
      {children}
    </ContextCreation.Provider>
  );
};

export const Context = () => {
  const { count, setCount } = useContext(ContextCreation);
  return (
    <>
      <div data-testid="context-value">Count : {count}</div> <br />
      <button data-testid="handleEvent" onClick={() => setCount(count + 1)}>
        Click Here
      </button>
    </>
  );
};

---
// Usage
<Provider> <Context /> </Provider>
```

---

## **7. React Router (Navigation in React)**

### **7.1 Installing React Router**

```sh
npm install react-router-dom
```

### **7.2 Implementing Basic Routing**

```tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Home() { return <h1>Home Page</h1>; }
function About() { return <h1>About Page</h1>; }
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

---

## **8. Fetching Data (API Integration)**

Fetching data is a common requirement in modern web applications. React provides flexibility to fetch data using libraries like **Axios**, **Fetch API**, or **React Query**.

---

### **8.1 Using Axios**

```tsx
import axios from 'axios';
import { useEffect, useState } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
```

---

### **8.2 Using React Query**

React Query simplifies data fetching, caching, and updating server-side data.

#### **Installation**
```sh
npm install react-query
```

---

#### **8.2.1 Query Client Setup**

To use React Query, you need to set up a **Query Client** and wrap your application with the `QueryClientProvider`.

```tsx
import { QueryClient, QueryClientProvider } from 'react-query';
import UsersList from './UsersList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersList />
    </QueryClientProvider>
  );
}

export default App;
```

---

#### **8.2.2 Fetching Data with Queries**

```tsx
import { useQuery } from 'react-query';
import axios from 'axios';

function UsersList() {
  const { data, error, isLoading } = useQuery('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
```

---

#### **8.2.3 Mutations (Updating Data)**

Mutations in React Query are used to create, update, or delete data on the server.

```tsx
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newUser) => axios.post("https://jsonplaceholder.typicode.com/users", newUser),
    {
      onSuccess: () => {
        // Invalidate and refetch the users query
        queryClient.invalidateQueries('users');
      },
    }
  );

  const handleAddUser = () => {
    mutation.mutate({ name: "New User", email: "newuser@example.com" });
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      {mutation.isLoading && <p>Adding user...</p>}
      {mutation.isError && <p>Error adding user</p>}
      {mutation.isSuccess && <p>User added successfully!</p>}
    </div>
  );
}

export default AddUser;
```

---

### **8.3 Summary of React Query Features**

| Feature         | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Query Client** | Centralized client for managing queries and mutations.                     |
| **Queries**      | Fetch and cache data from APIs.                                            |
| **Mutations**    | Perform create, update, or delete operations on the server.               |
| **Caching**      | Automatically caches query results for better performance.                |
| **Invalidation** | Automatically refetches data when mutations succeed.                      |

---

## **9. State Management with Redux**

### **9.1 Installing Redux Toolkit**

```sh
npm install @reduxjs/toolkit react-redux
```

### **9.2 Creating a Redux Store**

```tsx
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const slice = createSlice({
  name: "user",
  initialState: { name: "John", age: 30 },
  reducers: {
    updateName: (state, action) => { state.name = action.payload; },
    updateAge: (state, action) => { state.age = action.payload; },
  },
});

const store = configureStore({ reducer: { user: slice.reducer } });

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <input onChange={(e) => dispatch(slice.actions.updateName(e.target.value))} />
      <p>Name: {user.name}</p>
    </Provider>
  );
}

export default App;
```

---

## **10. Micro Frontends (MFE) Advanced Concepts**

Micro Frontends allow breaking a monolithic frontend into smaller, independently developed and deployed applications.

### **10.1 Module Federation in Webpack**

#### **Basic Usage Example**

1. **Remote Application (App1):**
```js
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: { "./Component": "./src/Component" },
    }),
  ],
};
```

2. **Host Application (App2):**
```js
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      remotes: { app1: "app1@http://localhost:3001/remoteEntry.js" },
    }),
  ],
};
```

---

## 📌 Author Information  

**👤 Author:** Madhava Reddy Vemireddy  
**🌐 Website:** [maddytech.rf.gd](https://maddytech.rf.gd/)
