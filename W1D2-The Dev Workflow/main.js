
const arguments = process.argv
let sum = 0;

if (arguments.length >= 4){
  let countPositive = 0;
  for (let i = 2; i < arguments.length; i++){
    if (! isNaN(Number(arguments[i]))){ //hello
      if (Number(arguments[i]) > 0){
        countPositive ++;
        sum += Number(arguments[i]);
      }
    }
  }

  if (countPositive === 0){
    console.log("Error, no numbers found!");
  }
  else if (countPositive === 1){
    console.log("Error, you need to provide at least 2 numerical arguments!")
  }
  else{
    console.log("The sum is " + sum);
  }
}
else{
  console.log("Error, you need to provide at least 2 arguments!")
}
