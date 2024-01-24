// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

let s = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

function removeDuplicateWords(s) {
    const uniqueWords = new Set(s.split(' '))
    return Array.from(uniqueWords).join(' ')
}

console.log(removeDuplicateWords(s))