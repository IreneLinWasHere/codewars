// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// Solution
let str = "The-Stealth-Warrior"

function toCamelCase(str){
    let result = ''
    let newArr = str.replace(/-/g, '_').split('_')
    result += newArr[0]
    for (let i = 1; i < newArr.length; i++){
        result += newArr[i].replace(newArr[i][0], newArr[i][0].toUpperCase())
    }
    return result
}

console.log(toCamelCase(str))