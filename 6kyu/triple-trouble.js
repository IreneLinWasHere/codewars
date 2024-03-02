// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

let num1 = 695264444333666600
let num2 = 3236233

function tripledouble(num1, num2) {

    const digify = num => num.toString().split('').map(e => +e)

    let digits1 = digify(num1)
    let digits2 = digify(num2)
    let result1 = []
    let result2 = []

    for (let i = 0; i < digits1.length - 2; i++) {
        if (digits1[i] == digits1[i + 1] && digits1[i] == digits1[i + 2]) {
            result1.push(digits1[i])
        }
    }

    for (let i = 0; i < digits2.length - 1; i++) {
        if (digits2[i] == digits2[i + 1]) {
            result2.push(digits2[i])
        }
    }

    return result1.filter(e => result2.includes(e)).length === 0 ? 0 : 1
}

console.log(tripledouble(num1, num2))