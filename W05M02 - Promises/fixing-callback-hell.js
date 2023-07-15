const fs = require('fs');

fs.promises.readFile('./message.txt', {encoding : 'UTF-8'})
    .then((data) => {
        console.log("I'm inside the first promise response!");
        return fs.promises.writeFile('./copy.txt', data, {encoding : 'UTF-8'});
    })
    .then((dataPromise2) => {
        console.log("Inside the second promise response!");
        return fs.promises.readFile('./copys.txt', {encoding : 'UTF-8'})
    })
    .then((dataPromise3) => {
        console.log("Inside the third promise response!");
        console.log("The copied content is:", dataPromise3);
    })
    .catch((error) => {
        console.log("Something went wrong, see more details:", error);
    });

