// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// Solution
let array = ['a','b','c','d','f']

function findMissingLetter(array){
    for (let i = 0; i <= array.length; i++){
        if ((array[i].charCodeAt(0) + 1) !== array[i + 1].charCodeAt(0)) {
            let nextCharCode = array[i].charCodeAt(0) + 1
            return String.fromCharCode(nextCharCode)
        }
    }
}

console.log(findMissingLetter(array))