const fs = require('fs');

fs.readFile('./message.txt', {encoding : 'UTF-8'}, (error, data) => {
    console.log("I'm inside the callback");
    if (error){
        throw Error("Something went wrong while reading the file!!!");
    }
    else{
        fs.writeFile('./copy.txt', data, {encoding : 'UTF-8'}, (errorPromise2, dataPromise2) => {
            console.log("Inside the second callback");
            if(errorPromise2){
                throw Error("Something went wrong while writting to the copy.txt the file!!!");
            }
            else{
                console.log("File created and saved successfully!");
                fs.readFile('./copy.txt', {encoding : 'UTF-8'}, (errorPromise3, dataPromise3) => {
                    console.log("inside the third callback!");
                    if (errorPromise3){
                        throw Error("Something went wrong while reading from the copy.txt the file!!!");
                    }
                    else{
                        console.log("The copied content is:", dataPromise3);
                    }
                });
            }
        });
    }
});