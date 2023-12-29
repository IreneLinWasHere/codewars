// DESCRIPTION:
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

let arr = [12, 10, 8, 12, 7, 6, 4, 10, 12]

function highestRank(arr) {
    let result = {}
    for (let num of arr) {
        num in result ? result[num] += 1 : result[num] = 1
    }
    return +Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b)
}

console.log(highestRank(arr))