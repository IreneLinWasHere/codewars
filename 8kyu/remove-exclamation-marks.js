// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

let s = "Hello! World!"
function removeExclamationMarks(s) {
    return s.split('!').join('')
}

console.log(removeExclamationMarks(s))