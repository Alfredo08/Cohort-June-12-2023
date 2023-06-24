
const addTwoNumbers = (num1, num2) => num1 + num2;
const isOldEnoughToDrink = (age) => age >= 21;

let total = addTwoNumbers(10, 50);
console.log(total);

let alexAge = isOldEnoughToDrink(20);
console.log(alexAge)
let marthaAge = isOldEnoughToDrink(30);
console.log("Is Martha old enough to drink?", marthaAge);

(()=>{
    console.log("I'm an anonymous function!");
})

(function(){
    console.log("I'm an anonymous function!");
})