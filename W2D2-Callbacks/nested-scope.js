
const first = () => {
    let message = "Hello!";
    console.log("This is the first message");
    console.log(message);
    const second = () => {
        console.log("This is the second message");
        console.log(message);
    }
    second();
}

first();

const outside = () => {
    const inside = () => {
        console.log("Inside");
    }
    return inside;
}

let whichFunctionIsThis = outside();
whichFunctionIsThis();

/*
for(let i = 1; i <= 5; i ++ ){
    console.log(i);
}
console.log(i);
*/