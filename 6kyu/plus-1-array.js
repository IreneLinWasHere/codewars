// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

let arr = [0, 0, 1, 0]

function upArray(arr) {
    if (arr.some(num => num < 0 || num > 9) || arr.length === 0) {
        return null
    }

    let oneAdded = BigInt(arr.join('')) + BigInt(1) //handle big numbers
    return oneAdded.toString()
        .padStart(arr.length, '0') //adds the appropriate number of 0s at the beginning
        .split('')
        .map(digit => +digit)
}

console.log(upArray(arr))