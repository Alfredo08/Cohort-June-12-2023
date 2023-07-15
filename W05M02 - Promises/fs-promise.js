const fs = require('fs');

fs.promises.readFile('./message.txt', {encoding : 'UTF-8'})
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

