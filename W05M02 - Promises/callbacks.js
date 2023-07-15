
const addTwoNumbers = (num1, num2, callback) => {
    const total = num1 + num2;
    console.log(`The total sum is ${total}`);
    callback();
}

const printHello = () => {
    console.log("Hey there class of June 12, 2023 (Eve)");
}

setTimeout(
    () => {
        console.log("This is another message from a second timeout!");
    },
    2000
);

setTimeout(
    () => {
        console.log("Ready to start executing the info inside this timeout!");
    },
    2000
);

addTwoNumbers(10, 20, printHello);

