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

# HTML (HyperText Markup Language)

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

### **Explanation:**

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
#### **Description List:**
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
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

## **5. Semantic HTML**

Semantic HTML means using HTML tags that describe their meaning — not just their appearance.

### **Examples of Semantic Elements:**

- `<header>` – Top section (logo, title, nav)
- `<nav>` – Navigation links
- `<main>` – Main page content
- `<section>` – Logical group of content
- `<article>` – A full piece of content (blog post, news)
- `<aside>` – Sidebar or extra info
- `<footer>` – Bottom of the page (contact, copyright)

### **Why It Matters:**

- ✅ **Better SEO** – Search engines understand your content  
- ✅ **Better Accessibility** – Screen readers can navigate easily  
- ✅ **Cleaner Code** – Easier to read and maintain  

```
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

---

### **6.2 Canvas for Drawing**
The `<canvas>` element is used to draw graphics (games, charts, etc.) with JavaScript.
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```
```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 150, 75);
```

---

### **6.3 HTML5 Forms Enhancements**
- `required` attribute for mandatory fields
- `pattern` for input validation
- `placeholder` for better user experience

---

### **6.4 Geolocation API**
Get user’s location (with permission):
```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
```

---

### **6.5 Web Workers**
Web Workers allow you to run JavaScript in the background without blocking the main thread.
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

---

### **7.2 HTML & JavaScript Interaction**
```html
<button onclick="alert('Hello!')">Click Me</button>
```

---

### **7.3 Web Storage (LocalStorage & SessionStorage)**
```html
<script>
localStorage.setItem("username", "Alice");
alert(localStorage.getItem("username"));
</script>
```

---

### **7.4 Accessibility Best Practices**
- Use `alt` attributes for images
- Ensure proper heading hierarchy
- Use `aria` attributes for better screen reader support

---

### **7.5 SEO Best Practices**
- Use proper heading structure
- Add meta tags (`description`, `keywords`)
- Optimize images with `alt` attributes
- Use semantic elements (`<article>`, `<section>`, `<nav>`, etc.)

---

## **8. Real-World Example: A Simple Blog Page**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>City Hospital - Patient Portal</title>
</head>

<body>

  <!-- Header -->
  <header>
    <h1>City Hospital</h1>
    <nav>
      <a href="#">Home</a> |
      <a href="#">Appointments</a> |
      <a href="#">Reports</a> |
      <a href="#">Contact</a>
    </nav>
  </header>

  <!-- Main Content -->
  <main>

    <!-- Section: Patient Registration -->
    <section>
      <h2>Patient Registration</h2>

      <form>                                  
        <fieldset>
          <legend>Basic Information</legend>

          <label for="name">Full Name:</label>
          <input type="text" id="name" name="name" required><br><br>

          <label for="age">Age:</label>
          <input type="number" id="age" name="age"><br><br>

          <label for="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select><br><br>

          <label for="symptoms">Symptoms:</label><br>
          <textarea id="symptoms" name="symptoms"></textarea><br><br>

          <button type="submit">Register</button>
        </fieldset>
      </form>
    </section>

    <!-- Section: Lab Reports -->
    <section>
      <h2>Recent Lab Reports</h2>

      <table border="1">
        <!--<thead>-->
          <tr>
            <th>Date</th>
            <th>Test</th>
            <th>Result</th>
          </tr>
        <!--</thead>-->
        <tbody>
          <tr>
            <td><time datetime="2026-03-20">March 20, 2026</time></td>
            <td>Blood Sugar</td>
            <td>110 mg/dL</td>
          </tr>
          <tr>
            <td><time datetime="2026-03-22">March 22, 2026</time></td>
            <td>Cholesterol</td>
            <td>180 mg/dL</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Section: Health Article -->
    <article>
      <h2>Health Tip</h2>
      <p>
        Drinking enough water daily helps maintain <strong>good health</strong>.
        <mark>Stay hydrated</mark> to avoid fatigue.
      </p>
    </article>

    <!-- Aside -->
    <aside>
      <h3>Emergency Contact</h3>
      <p>Call: <strong>+91-1234567890</strong></p>
    </aside>

  </main>

  <!-- Footer -->
  <footer>
    <p>&copy; 2026 City Hospital | All Rights Reserved</p>
  </footer>

</body>
</html>
```

---

## **9. Interview Questions & Answers**

### **9.1 Basic Questions**
1. What is HTML?
2. What are HTML semantic elements?
3. Difference between `<div>` and `<span>`?

---

### **9.2 Advanced Questions**
1. What are the new features of HTML5?
2. Explain the difference between localStorage and sessionStorage.
3. How do you improve website accessibility using HTML?

---

# CSS (Cascading Style Sheets)

This guide provides a comprehensive understanding of CSS, covering fundamental concepts, advanced features, and best practices with detailed examples.

---

## **1. Introduction to CSS**

### **1.1 What is CSS?**

CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of web pages.

### **1.2 Why Use CSS?**

- Separates content from design
- Enhances user experience with better visuals
- Enables responsive design
- Supports animations and interactivity
- Improves maintainability and reusability

---

## **2. CSS Basics**

### **2.1 Selectors & Properties**

CSS selectors are used to target HTML elements, and properties define their styles.

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

/* Universal selector */
* {
  margin: 0;
}

/* Attribute selector */
input[type="text"] {
  border: 1px solid gray;
}

/* Descendant selector */
div p {
  color: blue;
}

/* Child selector */
div > p {
  color: red;
}
```

#### **Additional Selector Types**

| Selector | Example | Description |
|--------|--------|------------|
| Descendant | `div p` | Targets p inside div |
| Child | `div > p` | Direct child |
| Adjacent sibling | `h1 + p` | Next sibling |
| General sibling | `h1 ~ p` | All siblings |

```css
div > p {
  color: blue;
}
```

---

### **2.2 Box Model**

The CSS Box Model consists of:

1. **Content**: The actual content inside the element (e.g., text, images).
2. **Padding**: Space between the content and the border.
3. **Border**: Encapsulation around the padding.
4. **Margin**: Space outside the border.

```css
div {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

#### **Box Model Properties**

```css
box-sizing: content-box;
box-sizing: border-box;
```

---

### **2.3 CSS Specificity**

CSS Specificity determines which CSS rule is applied when multiple rules target the same element.

Priority order:

```
Inline Styles
      ↓
IDs (#id)
      ↓
Classes (.class), Attributes, Pseudo-classes
      ↓
Elements (div, p) & Pseudo-elements
      ↓
Universal selector (*) / inherited styles
```

Example:

```css
#title {
  color: red;
}

.heading {
  color: blue;
}

h1 {
  color: green;
}
```

---

### **2.4 Display Property**

The `display` property determines how elements appear in the layout.

| Value | Description |
|------|-------------|
| block | Takes full width |
| inline | Takes content width |
| inline-block | Inline but allows width/height |
| none | Hides element |
| flex | Enables Flexbox |
| grid | Enables Grid |

```css
span {
  display: inline-block;
}
```

---

### **2.5 Overflow**

The `overflow` property controls content overflow.

| Value | Description |
|------|-------------|
| visible | Default |
| hidden | Hides overflow |
| scroll | Adds scrollbar |
| auto | Scroll when needed |

```css
.container {
  width: 200px;
  height: 100px;
  overflow: auto;
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
- `flex-wrap: nowrap | wrap | wrap-reverse;` → decides if flex items stay on one line or wrap to the next when space runs out.

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
    gap: 20px;
}

.item {
    flex-grow: 1;
}
```

---

### **3.2 CSS Grid**

CSS Grid is used when you want to place items in rows and columns.

#### **3.2.1 Grid Properties**

**Container Properties:**

- `display: grid;` -> Enables CSS Grid
- `grid-template-columns: repeat(3, 1fr);` -> Creates 3 equal columns
- `grid-template-rows: auto;` -> Sets row height
- `gap: 16px;` -> Adds space between grid items
- `justify-items: start | center | end | stretch;` -> Moves items left, center, right, or stretch inside each cell
- `align-items: start | center | end | stretch;` -> Moves items top, center, bottom, or stretch inside each cell
- `justify-content: start | center | end | space-between | space-around;` -> Moves the full grid left, center, or right when extra space exists
- `align-content: start | center | end | space-between | space-around;` -> Moves the full grid up, center, or down when extra space exists
- `grid-template-areas` -> Gives names to grid sections

**Item Properties:**

- `grid-column: 1 / 3;` -> Makes an item take multiple columns
- `grid-row: 1 / 3;` -> Makes an item take multiple rows
- `grid-area: header;` -> Places an item in a named area
- `justify-self: start | center | end | stretch;` -> Moves one item left, center, right, or stretch
- `align-self: start | center | end | stretch;` -> Moves one item top, center, bottom, or stretch

This example creates 3 columns, adds space between items, makes one item wider, and makes one item taller.

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    grid-template-rows: auto;
    gap: 16px;
    justify-items: stretch;
    align-items: start;
}

.grid-item {
    padding: 16px;
    background-color: lightblue;
}

.grid-item--wide {
    grid-column: 1 / 3;
}

.grid-item--tall {
    grid-row: span 2;
}
```

---

## **4. Responsive Design**

### **4.1 Media Queries**

Media queries are used to apply styles based on device width, height, or other properties.

```css
@media (max-width: 600px) {
    body {
        background-color: lightgray;
    }
}
```

#### **Common Media Query Breakpoints**

```
320px  → Mobile
768px  → Tablet
1024px → Laptop
1440px → Desktop
```

#### **Responsive Units**

| Unit | Description |
|-----|-------------|
| px | Fixed size |
| % | Relative to parent |
| em | Relative to parent font |
| rem | Relative to root font |
| vw | Viewport width |
| vh | Viewport height |

---

## **5. Advanced CSS**

### **5.1 Animations & Transitions**

CSS animations and transitions add interactivity and enhance user experience.

#### **Simple Difference**

- `transition` -> Changes a style smoothly when something happens like hover or focus
- `animation` -> Runs movement or effects using `@keyframes`, even without hover

#### **Example**

In this example:

- the button changes smoothly on hover using `transition`
- the badge keeps moving using `animation`

```html
<button class="cta-button">
  Save Changes
  <span class="cta-badge">New</span>
</button>
```

```css
.cta-button {
    position: relative;
    padding: 14px 24px;
    border: none;
    border-radius: 10px;
    background-color: #1d4ed8;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
}

.cta-button:hover {
    background-color: #2563eb;
    transform: translateY(-3px);
    box-shadow: 0 10px 22px rgba(37, 99, 235, 0.35);
}

.cta-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 4px 8px;
    border-radius: 999px;
    background-color: #f97316;
    font-size: 12px;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.12);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
```

#### **Syntax**

```css
transition: property duration timing-function delay;
animation: name duration timing-function delay iteration-count direction;
```

---

### **5.2 CSS Variables**

CSS variables (custom properties) allow you to reuse values throughout your stylesheet.

```css
:root {
    --primary-color: blue;
    --secondary-color: green;
}

h1 {
    color: var(--primary-color);
}

p {
    color: var(--secondary-color);
}
```

---

### **5.3 Pseudo-Classes**

Pseudo-classes define the special state of an element.

```css
a:hover {
    color: red;
}

input:focus {
    border-color: blue;
}
```

Common pseudo-classes:

```
:hover
:focus
:active
:first-child
:last-child
:nth-child()
```

---

### **5.4 Pseudo-Elements**

Pseudo-elements style specific parts of an element.

```css
p::first-line {
    font-weight: bold;
}

p::before {
    content: "👉 ";
}
```

Common pseudo-elements:

```
::before
::after
::first-line
::first-letter
::selection
```

---

### **5.5 Z-Index**

The `z-index` property controls the stack order of elements.

```css
.box1 {
    position: absolute;
    z-index: 1;
}

.box2 {
    position: absolute;
    z-index: 2;
}
```

---

### **5.6 Positioning**

CSS positioning allows you to control the placement of elements.

#### **Positioning Types**

- `position: static;` -> Default position
- `position: relative;` -> Stays in normal place, but you can move it a little from that place
- `position: absolute;` -> Moves based on the nearest parent that has `position: relative`, `absolute`, `fixed`, or `sticky`
- `position: fixed;` -> Stays in the same place on the screen even when the page scrolls
- `position: sticky;` -> Acts normal first, then sticks when scrolling reaches a point

#### **Common Positioning Properties**

- `top` -> Distance from the top
- `right` -> Distance from the right
- `bottom` -> Distance from the bottom
- `left` -> Distance from the left
- `inset` -> Shortcut for `top`, `right`, `bottom`, and `left`
- `z-index` -> Decides which element comes in front

#### **Example**

In this example:

- `.product-card` uses `position: relative`
- `.sale-badge` uses `position: absolute` inside the card
- `.help-button` uses `position: fixed`
- `.section-title` uses `position: sticky`

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      height: 2000px; /* for scroll */
      font-family: Arial;
    }
.product-section {
    min-height: 1200px;
    padding: 24px;
}

.section-title {
    position: sticky;
    top: 0;
    padding: 12px 0;
    background-color: white;
    z-index: 5;
}

.product-card {
    position: relative;
    width: 320px;
    padding: 24px;
    border-radius: 16px;
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
}

.sale-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 4px 10px;
    border-radius: 999px;
    background-color: #dc2626;
    color: white;
    font-size: 12px;
}

.help-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    padding: 12px 18px;
    border: none;
    border-radius: 999px;
    background-color: #2563eb;
    color: white;
}
  </style>
</head>

<body>

  <section class="product-section">
  <h2 class="section-title">Featured Products</h2>

  <div class="product-card">
    <span class="sale-badge">Sale</span>
    <h3>Wireless Headphones</h3>
    <p>Clear sound, long battery life, and a comfortable fit.</p>
  </div>

  <button class="help-button">Help</button>
</section>

</body>
</html>
```


---

### **5.7 Transform**

Transforms modify element appearance.

#### **Common Transform Functions**

- `translate()` -> Moves the element from its current position
- `scale()` -> Makes the element bigger or smaller
- `rotate()` -> Turns the element clockwise or counterclockwise
- `skew()` -> Tilts the element on the X-axis or Y-axis

```css
.box--move {
  transform: translate(20px, 10px);
}

.box--scale {
  transform: scale(1.2);
}

.box--rotate {
  transform: rotate(45deg);
}

.box--skew {
  transform: skew(10deg, 5deg);
}
```

---

### **5.8 Object Fit**

Controls how images fit inside containers.

```css
img {
  object-fit: cover;
}
```

Values:

```
cover
contain
fill
none
scale-down
```

---

### **5.9 Cursor**

Defines mouse cursor appearance.

```css
button {
  cursor: pointer;
}
```

Common values:

```
pointer
not-allowed
grab
text
move
```

---

## **6. Best Practices**

1. **Use CSS Variables**: For consistent and reusable values.
2. **Organize Styles**: Use separate files for large projects.
3. **Avoid Inline Styles**: Use external stylesheets for maintainability.
4. **Use Shorthand Properties**: Simplify your code (e.g., `margin: 10px 20px;`).
5. **Test Responsiveness**: Always test your design on multiple devices.
6. **Use consistent naming conventions (BEM, utility classes).**

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

#### **7.5 Array Methods Mastery**
![image](https://github.com/user-attachments/assets/10d30b84-c826-467a-aea6-35ba133a6119)

#### 🧠 JavaScript Array Methods + C# Mapping (Clean Table Cheat Sheet)

---

#### 🟢 TRANSFORM (Create new array)

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| map() | transforms each element | `[1,2,3].map(n => n * 2)` | `[2,4,6]` | `Select(n => n * 2)` |

#### 🟢 FILTER (Select items)

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| filter() | keeps matching items | `[1,2,3,4].filter(n => n % 2 === 0)` | `[2,4]` | `Where(n => n % 2 == 0)` |

#### 🟢 SEARCH (Find items)

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| find() | first matching value | `[1,2,3].find(n => n > 1)` | `2` | `FirstOrDefault()` |
| findIndex() | index of first match | `[1,2,3].findIndex(n => n > 1)` | `1` | `FindIndex()` |

#### 🟢 CONDITION CHECK (Boolean result)

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| some() | at least one match | `[1,2,3].some(n => n > 2)` | `true` | `Any()` |
| every() | all must match | `[1,2,3].every(n => n > 0)` | `true` | `All()` |

#### 🟢 LOOP ONLY (No return)

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| forEach() | runs function for each item | `[1,2,3].forEach(n => console.log(n))` | `1 2 3` | `ForEach()` |


#### 🟢 REDUCE (Single value output)

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| reduce() | combines array into one value | `[1,2,3].reduce((a,b)=>a+b,0)` | `6` | `Aggregate()` |

#### 🟢 ADD / REMOVE (END)

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| push() | add at end | `arr.push(4)` | `[1,2,3,4]` | `Add()` |
| pop() | remove last item | `arr.pop()` | `[1,2]` | `RemoveAt(last)` |

#### 🟢 ADD / REMOVE (FRONT)

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| unshift() | add at front | `arr.unshift(0)` | `[0,1,2]` | `Insert(0, val)` |
| shift() | remove first item | `arr.shift()` | `[2,3]` | `RemoveAt(0)` |

#### 🟢 COPY (No change to original)

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| slice() | copy part of array | `[1,2,3,4].slice(1,3)` | `[2,3]` | `Skip + Take` |


#### 🟢 MODIFY (Changes original array)

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| splice() | add/remove elements anywhere | `[1,2,3].splice(1,1)` | `[1,3]` | `RemoveAt / Insert` |

#### 🟢 SORT / REVERSE

| Method | What it does | JavaScript Syntax | Output Example | C# Equivalent |
|--------|-------------|------------------|----------------|--------------|
| sort() | sorts array | `[3,1,2].sort()` | `[1,2,3]` | `OrderBy()` |
| reverse() | reverses array | `[1,2,3].reverse()` | `[3,2,1]` | `Reverse()` |

--- 

```
Transform → map
Filter → filter
Search → find
Check → some / every
Loop → forEach
Single value → reduce
End ops → push / pop
Front ops → shift / unshift
Modify → splice
Copy → slice
Order → sort / reverse
```

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
- **Debouncing**: Debouncing ensures a function runs only after a certain period of inactivity.
  - Run only after user stops doing something (“wait & then fire”).
- **Throttling**: Throttling Ensures a function is executed at most once in a specified interval.
  - Run function once every X milliseconds, no matter how many times event happens (“fire every interval”).

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

---

#### **7.9 `this` Keyword**

**What is it?**  
The `this` keyword refers to the object that is executing the current function.

The value of `this` depends on **how the function is called**, not where it is defined.

**Example: Object Method**

```js
const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

person.greet(); // Alice
```

---

**Example: Arrow Function Behavior**

Arrow functions **do not have their own `this`**. They inherit `this` from the surrounding lexical scope.

```js
const person = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // undefined
```

---

**Why it's important:**  
Understanding `this` is critical when working with:

- Object methods
- Classes
- Event handlers
- React components

---

#### **7.10 Prototypes & Prototype Chain**

**What is it?**  
JavaScript uses **prototype-based inheritance**.

Every JavaScript object has a hidden property called `[[Prototype]]`.

Objects inherit properties and methods from other objects through the **prototype chain**.

---

**Example**

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const user = new Person("Alice");
user.greet();
```

---

**Prototype Chain**

When accessing a property:

```
object → prototype → prototype prototype → null
```

JavaScript searches up the chain until it finds the property.

---

**Why it's important:**  
Prototypes are the foundation of:

- JavaScript inheritance
- Classes
- Object behavior

---

#### **7.11 Execution Context & Call Stack**

**Execution Context**

JavaScript code runs inside an **execution context**.

Types:

1. Global Execution Context  
2. Function Execution Context  

---

**Call Stack**

The **call stack** keeps track of function execution order.

Example:

```js
function a() {
  console.log("Function A");
}

function b() {
  a();
}

b();
```

Call stack order:

```
Global
b()
a()
```

---

**Why it's important:**  
Understanding execution context helps explain:

- Hoisting
- Closures
- Call stack errors
- Function execution flow

---

#### **7.12 Garbage Collection**

**What is it?**  
JavaScript automatically manages memory using **Garbage Collection**.

Garbage collection removes objects that are **no longer reachable**.

---

**Example**

```js
let obj = { name: "Alice" };

obj = null; // eligible for garbage collection
```

---

**Common Causes of Memory Leaks**

- Unremoved event listeners
- Closures holding references
- Global variables
- Timers not cleared

---

**Why it's important:**  
Understanding garbage collection helps prevent:

- Memory leaks
- Performance issues
- Unresponsive applications

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
```
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
TypeScript Utility Types (Clean Cheat Sheet)

--------------------------------------------

Partial<T>
👉 Makes all properties optional

Example:
type User = { name: string; age: number };

const u: Partial<User> = { name: "Alice" };

Output:
{ name: "Alice" } ✔ (age is optional)

--------------------------------------------

Required<T>
👉 Makes all properties required

Example:
type User = { name?: string; age?: number };

const u: Required<User> = { name: "Alice", age: 25 };

Output:
{ name: "Alice", age: 25 } ✔ (all fields required)

--------------------------------------------

Readonly<T>
👉 Makes properties read-only (cannot be changed)

Example:
type User = { name: string };

const u: Readonly<User> = { name: "Alice" };

// u.name = "Bob" ❌ error

Output:
{ name: "Alice" } ✔ (immutable object)

--------------------------------------------

Pick<T, K>
👉 Select only specific properties from a type

Example:
type User = { name: string; age: number; email: string };

type UserName = Pick<User, "name" | "email">;

Output Type:
{ name: string; email: string }

--------------------------------------------

Omit<T, K>
👉 Remove specific properties from a type

Example:
type User = { name: string; age: number; email: string };

type UserWithoutEmail = Omit<User, "email">;

Output Type:
{ name: string; age: number }

--------------------------------------------

Record<K, T>
👉 Creates an object type with key-value pairs

Example:
const roles: Record<string, number> = {
  admin: 1,
  user: 2
};

Output:
{ admin: 1, user: 2 }

--------------------------------------------

ReturnType<T>
👉 Gets the return type of a function

Example:
function getUser() {
  return { name: "Alice", age: 25 };
}

type UserType = ReturnType<typeof getUser>;

Output Type:
{ name: string; age: number }

--------------------------------------------

Parameters<T>
👉 Gets parameter types of a function

Example:
function add(a: number, b: number) {}

type AddParams = Parameters<typeof add>;

Output Type:
[number, number]
```
---

#### **6.3 Union Types**

Union types allow a variable to hold **multiple possible types**.

```ts
let id: string | number;

id = "101";
id = 101;
```

---

#### **6.4 Intersection Types**

Intersection types combine multiple types into one.

```ts
type Person = {
  name: string;
};

type Employee = {
  role: string;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Alice",
  role: "Developer"
};
```

---

#### **6.5 Type Narrowing**

Type narrowing allows TypeScript to refine types using conditions.

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

---

#### **6.6 Optional Chaining**

Optional chaining safely accesses nested properties.

```ts
const user = {
  address: {
    city: "London"
  }
};

console.log(user?.address?.city);
```

---

#### **6.7 Nullish Coalescing**

Provides a default value when a variable is `null` or `undefined`.

```ts
let username = null;
let name = username ?? "Guest";
```

---

#### **6.8 Readonly**

The `readonly` modifier prevents modification of properties.

```ts
type User = {
  readonly id: number;
  name: string;
};

const user: User = { id: 1, name: "Alice" };

// user.id = 2 ❌ Error
```

---

#### **6.9 Record Utility Type**

The `Record` utility type creates an object type with consistent key/value structure.

```ts
type UserRoles = Record<string, string>;

const roles: UserRoles = {
  admin: "Administrator",
  user: "Regular User"
};
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
A union of types that share a common literal property used to safely distinguish between them
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
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function UsersList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    },
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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newUser) =>
      axios.post("https://jsonplaceholder.typicode.com/users", newUser),

    onSuccess: () => {
      // Refetch users after adding
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleAddUser = () => {
    mutation.mutate({
      name: "New User",
      email: "newuser@example.com",
    });
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>

      {mutation.isPending && <p>Adding user...</p>}
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

## **11. Controlled vs Uncontrolled Components**

React forms can be managed in two ways: **Controlled Components** and **Uncontrolled Components**.

### **11.1 Controlled Components**

In controlled components, **React state controls the form input**.

```tsx
import { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
      />
      <p>Value: {value}</p>
    </div>
  );
}
```

**Advantages**

- Predictable state management
- Easier validation
- Better debugging

---

### **11.2 Uncontrolled Components**

Uncontrolled components allow the **DOM to manage the input state** using `useRef`.

```tsx
import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter text" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

---

## **12. React.memo (Performance Optimization)**

`React.memo` is a **higher-order component** used to prevent unnecessary re-renders.

If props do not change, the component will **not re-render**.

```tsx
import React from "react";

const Child = React.memo(({ name }: { name: string }) => {
  console.log("Child rendered");
  return <h2>{name}</h2>;
});

export default Child;
```

---

## **13. Custom Hooks**

Custom hooks allow developers to **reuse logic between components**.

### Example: Fetch API Data

```tsx
import { useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [url]);

  return data;
}
```

Usage:

```tsx
function Users() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  if (!users) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## **14. Code Splitting (Lazy Loading)**

Code splitting helps **reduce bundle size** and improves performance.

React supports lazy loading using `React.lazy` and `Suspense`.

```tsx
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
```

---

## **15. Error Boundaries**

Error boundaries catch **JavaScript errors in component trees** and display fallback UI.

```tsx
import React from "react";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

Usage:

```tsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

## **16. React Rendering Lifecycle**

React components go through three lifecycle phases.

### **Mount**

Component is created and inserted into the DOM.

### **Update**

Component re-renders when:

- Props change
- State changes
- Parent re-renders

### **Unmount**

Component is removed from the DOM.

Hooks equivalent:

```
componentDidMount → useEffect(() => {}, [])
componentDidUpdate → useEffect(() => {}, [deps])
componentWillUnmount → cleanup function
```

---

## **17. React Reconciliation**

React uses a **diffing algorithm** to compare the **Virtual DOM** with the previous version.

This process is called **Reconciliation**.

Steps:

1. React builds a new Virtual DOM tree.
2. Compares it with the previous tree.
3. Updates only the changed elements in the real DOM.

Benefits:

- Faster UI updates
- Efficient DOM manipulation

---

## **18. List Rendering & Keys**

Keys help React **identify which items changed, added, or removed**.

```tsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## **19. React Performance Optimization**

Important techniques for optimizing React applications.

### Memoization

```
React.memo
useMemo
useCallback
```

### Code Splitting

```
React.lazy
Dynamic imports
```

### Avoid Unnecessary Re-renders

- Proper key usage
- Memoized components
- Avoid inline functions

### Virtualization

Used when rendering **large lists**.

Libraries:

```
react-window
react-virtualized
```
---

## **20. Additional Advanced React Concepts**

### **20.1 Why React Components Re-render**

A React component re-renders when:

1. **State changes**
2. **Props change**
3. **Parent component re-renders**
4. **Context value changes**

Example:

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

When `setCount()` is called, the component re-renders.

---

### **20.2 React Strict Mode**

Strict Mode is a development tool that helps detect potential problems in React applications.

Example:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Benefits:

- Identifies unsafe lifecycle methods
- Detects unexpected side effects
- Provides additional development warnings

---

### **20.3 React Portals**

React Portals allow rendering components **outside the parent DOM hierarchy**.

Useful for:

- Modals
- Tooltips
- Popups

Example:

```tsx
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
}
```

---

### **20.4 Suspense for Data Loading**

React Suspense can also be used for **asynchronous data loading**.

Example:

```tsx
<Suspense fallback={<p>Loading...</p>}>
  <UserProfile />
</Suspense>
```

This allows React to show a fallback UI while waiting for data or components.


---

## 📌 Author Information  

**👤 Author:** Madhava Reddy Vemireddy  
**🌐 Website:** [maddytech.rf.gd](https://maddytech.rf.gd/)
