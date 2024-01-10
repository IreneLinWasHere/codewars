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

let arr = [1,0]

function upArray(arr) {
    let singleDigits = arr.filter(num => num < 10 && num > -1).length //rule out numbers 10 and above, and negative numbers
    if (singleDigits !== arr.length || arr.length === 0) {
        return null
    }
    else {
        let oneAdded = BigInt(arr.join('')) + BigInt(1)
        let result = oneAdded.toString().split('').map(digit => +digit)
        if (arr[0] == 0 && arr[1] > 0) {
            result.unshift(0)
        }
        if (arr[0] == 0 && arr[1] == 0) {
            result.unshift(0, 0)
        }
        return result
    }
}

console.log(upArray(arr))