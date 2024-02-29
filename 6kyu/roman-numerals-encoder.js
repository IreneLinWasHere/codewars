// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

let number = 1666 // MDCLXVI

// function solution(number) {
//     let result = ''

//     while (number > 999) {
//         result += 'M'
//         number -= 1000
//     }
//     while (number > 899) {
//         result += 'CM'
//         number -= 900
//     }
//     while (number > 499) {
//         result += 'D'
//         number -= 500
//     }
//     while (number > 399) {
//         result += 'CD'
//         number -= 400
//     }
//     while (number > 99) {
//         result += 'C'
//         number -= 100
//     }
//     while (number > 89) {
//         result += 'XC'
//         number -= 90
//     }
//     while (number > 49) {
//         result += 'L'
//         number -= 50
//     }
//     while (number > 39) {
//         result += 'LX'
//         number -= 40
//     } while (number > 9) {
//         result += 'X'
//         number -= 10
//     } while (number > 8) {
//         result += 'IX'
//         number -= 9
//     }
//     while (number > 4) {
//         result += 'V'
//         number -= 5
//     } while (number > 3) {
//         result += 'IV'
//         number -= 4
//     } while (number > 0) {
//         result += 'I'
//         number -= 1
//     }

//     return result
// }


//refactored
function solution(number) {
    const romanNumerals = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    }

    let result = ''

    for (const symbol in romanNumerals) {
        while (number >= romanNumerals[symbol]) {
            result += symbol
            number -= romanNumerals[symbol]
        }
    }
    
    return result
}

console.log(solution(number))