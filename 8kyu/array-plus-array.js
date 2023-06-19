// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Solution
let arr1 = [100, 200, 300]
let arr2 = [400, 500, 600]

function arrayPlusArray(arr1, arr2) {
    let newArr = [...arr1, ... arr2]
    return newArr.reduce((a, b) => a + b)
}

console.log(arrayPlusArray(arr1, arr2))