// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// Solution
let numbers = [17, 17, 3, 17, 17, 17, 17]

function stray(numbers) {
    let counts = {}

    for (let num of numbers) {
        counts[num] = (counts[num] || 0) + 1 
    }

    for (let num in counts) {
        if (counts[num] === 1) return +num
    }
}

//Refactored, but only works for odd-length arrays
//const stray = nums => nums.reduce((a, b) => a ^ b);

console.log(stray(numbers))