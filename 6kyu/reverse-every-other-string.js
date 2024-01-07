// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

let str = " Reverse this string, please!  "

function reverse(str) {
    return str
        .split(' ')
        .filter(item => item.length > 0)
        .map((e, i) => {
            return i % 2 ? e.split('').reverse().join('') : e
        })
        .join(' ')
}

console.log(reverse(str))