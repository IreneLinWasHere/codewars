// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

let a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
let a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]

const maxStrLen = arr => Math.max(...arr.map(e => e.length))
const minStrLen = arr => Math.min(...arr.map(e => e.length))

function mxdiflg(a1, a2) {
    let a1Max = maxStrLen(a1)
    let a2Max = maxStrLen(a2)

    let a1Min = minStrLen(a1)
    let a2Min = minStrLen(a1)

    return Math.max(Math.abs(a1Max - a2Min), Math.abs(a2Max - a1Min))
}

console.log(mxdiflg(a1, a2))