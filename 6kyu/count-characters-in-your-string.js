// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Solution
let str = 'abcddA'

function count(str) {
    let count = {}
    for (let letter of str) {
        count[letter] = (count[letter] || 0) + 1
    }

    return count
}

console.log(count(str))