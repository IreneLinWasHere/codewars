// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// Solution
let num = 70304

function expandedForm(num) {
    let numArr = num.toString().split('')
    let expanded = []
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] !== '0') {
            expanded.push(numArr[i] + '0'.repeat(numArr.length - 1 - i))
        }
    }
    return expanded.join(' + ')
}

console.log(expandedForm(num))