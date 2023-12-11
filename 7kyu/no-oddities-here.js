// DESCRIPTION:
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

let values = [0, 1, 2, 3]
function noOdds(values) {
    return values.filter(num => !(num % 2))
}

console.log(noOdds(values))