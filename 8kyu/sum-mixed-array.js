// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Solution
let x = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
function sumMix(x){
    return x.map(n => +n).reduce((a, b) => a + b)
}

console.log(sumMix(x))