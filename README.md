# Questions & Answers

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- **getElementById**: it selects **one element** by its `id`.  
- **getElementsByClassName**: it selects **all elements** with a class. Returns a collection of that class.  
- **querySelector**: it selects the **first element** matching a CSS selector.  
- **querySelectorAll**: it selects **all elements** matching a specific CSS selector. Returns a NodeList.  

---

## 2. How to create and insert a new element

We create a new element using `document.createElement()` and insert it using methods like `appendChild()` into a parent.

Example:

```javascript
// Creating a new p element as a child
const p = document.createElement("p");

// adding some text
p.innerText = "Hello, world!";

// Inserting it inside the body
document.body.appendChild(p);
```

---

## 3. What is Event Bubbling? And how does it work?

**Event Bubbling** is when something we do on a child element (like clicking a button), the click also affects its parent elements automatically, one by one, going up the DOM tree until the end of the tree (`document`).

Example:

```html
<div id="parent">
  <button id="child">Click</button>
</div>
```

It means:

child -> parent -> parent of parent -> .... -> document

---

## 4. Event Delegation in JavaScript

**Event Delegation** is when we add a single event listener to a parent element instead of multiple child elements. The event **bubbles up** from the child to the parent, and we can check which child triggered it using `event.target`.

**Why it’s useful:**
- Reduces the number of event listeners → better performance.
- Better optimization power.

---

## 5. Difference between `preventDefault()` and `stopPropagation()`

**`preventDefault()`**
--> Stops the default action of an element.  
--> Example: It prevents a link from opening a page when clicked.

**`stopPropagation()`**
--> It stops the event from bubbling up to parent elements.  
--> Example: Clicking a button inside a div will prevent any parent event handlers from being executed.