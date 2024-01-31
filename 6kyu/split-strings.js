// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


let str = 'abcde'
function solution(str){
    let result = []

    for (let i = 0; i < str.length; i += 2) {
        let subStr = str.substring(i, i + 2)
        subStr.length === 2 ? result.push(subStr) : result.push(str[i] + '_')
    }

    return result
}

console.log(solution(str))