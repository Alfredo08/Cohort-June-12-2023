# M04 W08 | Client Side JavaScript & jQuery
[Github Repository](https://github.com/Alfredo08/Cohort-June-12-2023/tree/main/W08M04%20-%20Client%20Side%20JavaScript%20%26%20jQuery) | [Vimeo Video Recording](https://vimeo.com/852003749/e5cc1a3146?share=copy)

## Topics to cover

- [X] Client side JS
  - [x] 1. Browser objects
  - [x] 2. Intro to the DOM
  - [x] 3. The document object
  - [x] 4. Event handling and the event object

- [X] 5. Intro to JQuery
  - [x] Why does it exist?
  - [x] How much additional behavior does it add to the browser?
  - [x] Library or framework? Why?
  - [x] Why is it important to learn / use jQuery?
  - [x] Element creation with jQuery
  - [x] Event handling with jQuery

### 1. Browser objects
---

In order to access and/or modify elements on your website (or even on the browser itself), modern browsers offer different objects we can access through JavaScript: 

**`window` object**
  - Represents the window that holds the DOM and [BOM](https://www.w3schools.com/js/js_window.asp) objects
  - Each tab in a browser is a _window_ with its own `window` object
  - Contains (among other things) information about the size of the window and screen

**`navigator` object**
  - Part of the BOM objects
  - Contains information about the browser such as browser version, browser name, and geographic location

**`document` object**
  - Represents the DOM
  - Can be seen in the browser console by running `console.dir(document)`

We call the objects directly, or as properties of the window object:

```js
// you can also access navigator and document as props on the window object
window.navigator === navigator; // true
window.document === document; // true
```

### 2. Intro to the DOM
---

From [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction):

> The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
  
Our HTML is turned into a data structure that we call the **D**ocument **O**bject **M**odel (**DOM**).

* The DOM is stored as a [`tree`](https://en.wikipedia.org/wiki/Tree_(data_structure)) data structure with parent/child/sibling relationships between various parts of the page
* The DOM allows us to interact with the web page using JavaScript

* eg. The browser turns your HTML into the DOM

```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome to my page!</h1>
    <div class="content">
      <p>My Favourite Numbers</p>
      <ul id="main-list">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  </body>
</html>
```

![DOM example](https://raw.githubusercontent.com/andydlindsay/lectures/master/w04d02/dom-example.png)
*Green outline === HTML element; Pink outline === text node*

### 3. The `document` object
---

When an HTML document is loaded into a web browser, it becomes a `document` object, which:
* acts as the root node of the HTML document.
* is a property of the window object.
* is accessed with: `window.document` or just `document`

[You can find a list of properties and methods of the `document` object, with explanations and examples on the w3school's website](https://www.w3schools.com/jsref/dom_obj_document.asp).

### 4. JavaScript Events
---
Events are "things" that get triggered when some action has occurred in the website (_eg. a button is clicked, the mouse pointer is moved, a key is pressed_). When JavaScript is used in HTML pages, **JavaScript can "react" on these events**.

#### Handling events

We can attach code (usually in the form of a `callback` function) to run when a specific event occurs... we call this **attaching an event listener to an element**:

```js
// we can use anonymous functions...
document
  .querySelector('button')
  .addEventListener('click', (event) => {
  // do something
  });

// or named functions
const eventHandler = function (event) {
  // do something
};
document
  .querySelector('button')
  .addEventListener('click', eventHandler);
```

[There are a *lot* of events](https://developer.mozilla.org/en-US/docs/Web/Events). Each event is represented by an `Event` object which is passed as the argument to the callback function.

#### The event object


The `Event` object contains useful information about the specific event that occurred

```js
// console.log the mouse x and y coordinates whenever the body is clicked
const clickHandler = function (event) {
  console.log(event.clientX, event.clientY);
};
document
  .querySelector('body')
  .addEventListener('click', clickHandler);

// we can also remove event handlers using a similar API
document
  .querySelector('body')
  .removeEventListener('click', clickHandler);
```

### 5. jQuery
---

[jQuery](https://jquery.com/) is a JavaScript library that provides a simple API for DOM manipulation, event handling, and AJAX requests
* Can be referenced with `jQuery` or the `$`
* Typically brought into a project using a Content Delivery Network (**CDN**)
* **CDN**s store code and other files that can be brought into our projects as the browser loads our page

```html
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
```

You can also [download the latest compressed-production-ready version on jQuery](https://jquery.com/download/) and add it to your project files.

jQuery Uses CSS selectors for finding elements in the DOM

```js
// html element
$('h1');
// class
$('.my-class');
// id
$('#my-id');
// nested element
$('.my-class span');
```

#### Creating Elements with jQuery

We can use the same jQuery interface to create DOM elements by passing in the opening tag of an HTML element

```js
const newDiv = $('<div>');
const newImg = $('<img>');

// note the greater than and less than
$('img') !== $('<img>');
```

We can add attributes, event listeners, and even child elements to our created elements and then append to somewhere in the DOM

```js
// create a new image and give it a src attribute
const newImg = $('<img>').attr('src', '/path/to/image.png');

// append the new image to the body element
$('body').append(newImg);
```

#### Event Handling with jQuery

We can also easily attach event listeners to DOM events using jQuery

```js
// using the .on method
$('button').on('click', clickHandler);

// there are several shorthand methods for common DOM events
$('button').click(clickHandler);
$('form').submit(submitHandler);
$('input').focus(focusHandler);
```

#### Document Ready

We usually want to wait for the document to finish being loaded before our JavaScript runs. jQuery gives us a simple interface for wrapping our code. Once the document has finished loading, our callback is called:

```js
$(document).ready(() => {
  // this callback runs once the document is "ready"
  console.log('ready');
});

// or
$(() => {
  // passing a callback to jQuery is a shorthand for $(document).ready()
  console.log('ready');
});
```

All the JavaScript and jQuery code can be wrote inside the callback passed into the ready function. This way you can ensure that your document is loaded.

## Useful Links

* [MDN: The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* [W3C DOM Standard](https://www.w3.org/DOM/)
* [MDN: Browser Events](https://developer.mozilla.org/en-US/docs/Web/Events)
* [What is the `$` in DevTools?](https://thewebivore.com/exactly-wth-is-up-with-in-devtools/)
* [jQuery Docs](https://jquery.com/)