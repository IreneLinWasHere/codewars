// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

let str1 = 'kataslkjoi'
let str2 = 'steak'

function scramble(str1, str2) { 
    function countLetters(str) {
        let letters = {}
        for (let letter of str) {
            letters[letter] = (letters[letter] || 0) + 1
        }
        return letters
    }

    let s1 = countLetters(str1)
    let s2 = countLetters(str2)

    for (let char in s2) {
        if (!s1[char] || s1[char] < s2[char]) {
            return false;
        }
    }

    return true;
}

console.log(scramble(str1, str2))