// 1) how to take in an unlimited number of command line arguments?
const commandLineArguments = process.argv;

// I want to create a new array, where i don't pass the first two arguments
const argumentsArray = commandLineArguments.slice(2);

// 2) how can we go through each one of command line arguments?
let sum = 0;

for (let i=0; i < argumentsArray.length; i++) {
  const argument = argumentsArray[i];
  const number = Number(argument);
  sum = sum + number;
}

// 3) how can we print the sum of them?
console.log('Sum result:', sum);

/*
  Now that we have the initial steps done,
  and we have some progress, we can start
  including every other validation and 
  other tinier details that must be considered
*/