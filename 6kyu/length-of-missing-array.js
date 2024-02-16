// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

let arrayOfArrays = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9], []]

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null ||
        arrayOfArrays.some(e => !e) ||
        arrayOfArrays.some(e => e.length === 0)) {
        return 0
    }
    let sorted = arrayOfArrays.sort((a, b) => a.length - b.length)

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i].length + 1 != sorted[i + 1].length) {
            return sorted[i].length + 1
        }
    }
    return 0
}

console.log(getLengthOfMissingArray(arrayOfArrays))