# M03 W06 | CRUD with Express
[Github Repository](https://github.com/Alfredo08/Cohort-June-12-2023/tree/main/W06M03%20-%20CRUD%20with%20Express) | [Vimeo Video Recording](https://vimeo.com/847643227/2b2cccd596?share=copy)

## Topics to cover

- [x] 1. Express.js Routes
- [x] 2. Implementing CRUD over HTTP
- [x] 3. EJS Templates
- [x] 4. Forms (action, method)
- [x] 5. Devtools network tab


### Express
---

Framework for node.js apps to more easily accept HTTP Requests, and return HTTP responses. Simplifying the process of creating an HTTP server.

### CRUD
---

Any time we are working with resources on a web server...

* CREATE (New Resource Form + Save)
* READ   (Index + Show)
* UPDATE (Edit Form + Update)
* DELETE

### EJS (Embedded JavaScript)
---

* Helps us format HTML strings
* You can sprinkle bits of JS logic in EJS files
* EJS is back-end, and helps us format a string BEFORE it is sent to the browser
* EJS does NOT run in a browser, and must be run in a back-end only
* Separation of concerns

### GET vs. POST Forms
---

#### GET

* Is able to send a request with query parameters (right in the URL / address bar)
* Easy to share / reproduce
* Great for searches and reaching resources consistently

`myblog.com?id=3`

OR

```HTML
<form method="GET" action="https://google.com/search">
    <input name="q">
```

`https://google.com/search?q=query+parameter+strings`

#### POST

* Not easily bookmarkable / reproducable
* Does not show submission values in address bar / URL
* Great for sign-ins, edits, etc. -> actions you don't want as easily repeated or visible

```HTML
<form method="POST" action="https://site.com/sign-in">
    <input name="user">
    <input name="pass">
```

### Useful Links

* [JS .splice documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
* [Status codes](https://www.restapitutorial.com/httpstatuscodes.html)