
const myFirstPromise = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum >= 0.5){
        resolve(`The number is greater than 0.5. Num = ${randomNum}.`);
    }
    else{
        reject(`The number is lesser than 0.5. Num = ${randomNum}.`);
    }
});

console.log("First");
myFirstPromise
    .then((response) => {
        console.log("Third");
        console.log("Happy path");
        console.log(response);
    })
    .catch((error) => {
        console.log("Third");
        console.log("Unhappy path");
        console.log(error);
    });

console.log("Second");