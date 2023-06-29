// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Solution
let str = "The quick brown fox jumps over the lazy dog."

// function isPangram(str){
//     let allLets = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     return [...new Set(str.toLowerCase())] //ignore case and get unique characters
//         .filter(letter => allLets.includes(letter)) //filter out characters that are not in the alphabet
//         .length === allLets.length //check to see if number of characters left is same as number in alphabet
// }

//another solution
function isPangram(str){
    str = str.toLowerCase()
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(x => str.includes(x))
}

console.log(isPangram(str))