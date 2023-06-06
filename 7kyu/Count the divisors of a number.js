// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

// Solution
// function getDivisorsCnt(n){
//     let count = 0
//     for (let i = 1; i <= n; i++) {
//         if (Number.isInteger(n / i)) count++ 
//     }
//     return count
// }

//More efficient loop, for cases where n is really large
function getDivisorsCnt(n) {
    if (n === 1) return 1

    let count = 2
    const sqrtN = Math.sqrt(n)

    for (let i = 2; i <= sqrtN; i++) {
        if (n % i === 0) {
            if (i === sqrtN && i * i === n) {
                count++
            } else count += 2
        }
    }
    return count
}
    
console.log(getDivisorsCnt(30))