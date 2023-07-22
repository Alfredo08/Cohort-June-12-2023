// Definition of a function
function addTwoNumbers(num1 = 10, num2 = 5){
    let total = num1 + num2;
    return total;
}

let total = addTwoNumbers(10, 20);
console.log(total);

let total2 = addTwoNumbers(40);
console.log(total2);

let total3 = addTwoNumbers();
console.log(total3);


let myValue = addTwoNumbers;

console.log(myValue);
let total4 = myValue(40, 70);
console.log(total4);

let elements = [10, 20, 30, addTwoNumbers];
console.log(elements);
let total5 = elements[3](elements[0], elements[1]);
console.log(total5);

let age = 30;
const myObj = {
    name: "Alex",
    addTwoNumbers,
    age: age
};

console.log(myObj);
let total6 = myObj.addTwoNumbers(100, 200);
console.log(total6);