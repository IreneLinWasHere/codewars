// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0

let n = 4

// Return the nth triangular number
// function triangular(n) {
//     let result = 0
//     if (n > 0) {
//         for (let i = 1; i <= n; i++) {
//             result += i
//         }
//     }
//     return result
// }

// Refactored
function triangular(n) {
    return n > 0 ? (n * (n + 1)) / 2 : 0
}

console.log(triangular(n))