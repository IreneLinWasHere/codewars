// The aim of the kata is to decompose n! (factorial n) into its prime factors.

// Examples:

// n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
// since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

// n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

// n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
// Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

// Notes

// the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
// factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

function decomp(n) {
    let nFactorial = factorial(n)
    let result = []

    console.log(nFactorial)

    
    for (let i = 2; i <= n; i++) {
        let count = 0
        while (nFactorial % i === 0) {
            nFactorial /= i
            console.log(i, count, nFactorial)
            count++
        }
        console.log(i, count, nFactorial)
        if (count === 1) {
            result.push(i)
        } else if (count > 1) {
            result.push(`${i}^${count}`)
        }
    }

    return result.join(' * ')
}

console.log(decomp(22))




// function decomp(n) {
//     let result = []
//     for (let i = 2; i <= n; i++) {
//         let nRemainder = i
//         for (let factor = 2; nRemainder > 1; factor++) {
//             while (nRemainder % factor === 0) {
                 
//             }
//         }
//     }
// }

// function decomp(n) {
//     let primeFactors = {};
//     for (let nPart = 2; nPart <= n; nPart++) { //every multiplicative element of n!
//       let nPartRemaining = nPart;
//       for (let factor = 2; nPartRemaining > 1; factor++) { //prime factorization
//         while (nPartRemaining % factor === 0) {
//           nPartRemaining /= factor;
//           primeFactors[factor] = primeFactors[factor] + 1 || 1;
//         }
//       }
//     } // n! will always have >= 1 of every prime factor <= n
//     return Object.keys(primeFactors).map((prime) => {
//         let exponent = primeFactors[prime];
//         return prime + ((exponent > 1) ? '^' + exponent : '');
//       }).join(' * ');
//     }

//     console.log(decomp(12));