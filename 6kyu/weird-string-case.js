// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

let string = "Weird string case"

// function toWeirdCase(string) {
//     let words = string.split(' ')
//     let result = []

//     for (word of words) {
//         let formatted = word
//             .split('')
//             .map((letter, ind) => {
//                 return ind % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
//             }).join('')
//         result.push(formatted)
//     }

//     return result.join(' ')
// }

function toWeirdCase(string) {
    return string.split(' ').map(word => {
        return word.split('').map((letter, ind) => {
            return ind % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join('')
    }).join(' ')
}

console.log(toWeirdCase(string))