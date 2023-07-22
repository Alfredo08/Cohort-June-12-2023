const addTwoNumbers = (num1, num2) => num1 + num2;

console.log(addTwoNumbers(30, 40));
console.log(addTwoNumbers);


const myFunction = (heyThere) => {
    console.log(heyThere(50, 100));
}

myFunction(addTwoNumbers)
