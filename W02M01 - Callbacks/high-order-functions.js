
let nums = [10, 20, 30, 40, 50];
// 1st param is the item, 2nd para is the index, 3rd param is the whole array
/*
const printNum = (num, i, array) => console.log(num, i, array);


nums.forEach(printNum);

nums.forEach((num, i, array) => console.log(num, i, array));

printNum(150, -5);
*/
nums.forEach((num, i) => {
    let total = num + 5;
    total = total % i;
    total = total * 3;
    console.log(total);
});

function formula(num, i){
    let total = num + 5;
    total = total % i;
    total = total * 3;
    console.log(total);
}
nums.forEach(formula);

let filteredNumbers = nums.filter((num) => {
    if(num < 10){
        return num
    }
});

console.log(filteredNumbers, nums);

let numsAsObjects = nums.map((num) => {
    const newObj = {
        num
    }
    return newObj;
});

console.log(numsAsObjects, nums);

const filteredObjects = numsAsObjects.filter((item) => {
    if(item.num < 40){
        return item;
    }
});
console.log(filteredObjects);