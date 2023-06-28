// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Solution
let s = "abcdef"

function capitalize(s){
    let even = s.split('')
        .map((a, i) => !(i % 2) ? a.toUpperCase() : a)
        .join('')
    let odd = s.split('')
        .map((a, i) => (i % 2) ? a.toUpperCase() : a)
        .join('')
    return [even, odd]
}

console.log(capitalize(s))