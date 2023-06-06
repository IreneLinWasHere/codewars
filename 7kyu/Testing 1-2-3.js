// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// Solution
let array = ['a', 'b', 'c']
// function number(array) {
//     let newArr = []
//     for (let i = 1; i <= array.length; i++) {
//         newArr.push(`${i}: ${array[i - 1]}`)
//     }
//     return newArr
// }

//Using map
function number(array) {
    return array.map((v, i) => `${i + 1}: ${v}`)
}

console.log(number(array))