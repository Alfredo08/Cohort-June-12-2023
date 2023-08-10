const requestPromise = require('request-promise');

const settings = {
    uri : "https://jsonplaceholder.typicode.com/posts",
    json : true
};

console.log('First');
requestPromise(settings)
    .then((responseJSON) => {
        responseJSON.forEach((obj) => {
            console.log(obj.id, obj.title);
        });
    })
    .catch((error) => {
        console.log("Something went wrong", error);
    });
console.log('Second');