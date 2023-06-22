// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// Solution
let str = 'camelCasingTest'

function solution(str){
    let broken = ''
    for (let i = 0; i < str.length; i++) {
        str[i] === str.charAt(i).toUpperCase() ? broken += ' ' + str[i] : broken += str[i]
    }
    return broken
}

console.log(solution(str))