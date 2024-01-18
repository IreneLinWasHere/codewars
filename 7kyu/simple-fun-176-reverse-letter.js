// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

let str = "ultr53o?n"

function reverseLetter(str) {
    let lettersOnly = str.replace(/[^a-zA-Z]/g, '')
    return lettersOnly.split('').reverse().join('')
}

console.log(reverseLetter(str))