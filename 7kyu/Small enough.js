// You will be given an array and a limit value. You must check that all values in the array 
// are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Solution
let a = [66, 101]
let limit = 100


function smallEnough(a, limit){
    return Math.max(...a) <= limit
}

console.log(smallEnough(a, limit))