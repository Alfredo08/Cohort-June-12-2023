
const num = 10;

const iterativeSum = (num) => {
    let totalSum = 0;

    for(let i = 1; i <= num; i ++){
        totalSum += i;
        // console.log("Adding a " + i);
        // console.log("TotalSum: " + totalSum);
    }
    return totalSum;
}

console.log(iterativeSum(num));

const recursiveSum = (num) => {
    if(num === 1){
        return num
    }
    return recursiveSum(num - 1) + num;
}

console.log(recursiveSum(num));