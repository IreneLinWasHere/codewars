// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:
// > 6
// Output:
// 0+1+2+3+4+5+6 = 21

// Input:
// > -15
// Output:
// -15<0

// Input:
// > 0
// Output:
// 0=0

let count = 6

function sequenceSum(count) {
    if (count > 0) {
        let array = Array.from({ length: count + 1 }, (_, index) => index)
        let sum = array.reduce((a, c) => a + c, 0)

        let result = ''
        array.map((num, i) => {
            i === 0 ? result += num : result += `+${num}`
        })
        return `${result} = ${sum}`
    } 

    if (count === 0) {
        return `${count}=0`
    }

    if (count < 0) {
        return `${count}<0`
    }
}

console.log(sequenceSum(count))