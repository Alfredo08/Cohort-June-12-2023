const request = require('request');

request.get("https://jsonplaceholder.typicode.com/posts", {json : true}, (error, response, body) => {
    if(error){
        throw new Error("Something went wrong", error);
    }
    console.log(response);
    console.log(body);
});