const text = "i love programmingggg at lighthouse labs";
const arrayLetters = text.split('');

const result = arrayLetters.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]){
        accumulator[currentValue] ++;
    }
    else{
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(result);