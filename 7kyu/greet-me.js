// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

let name = 'JACK'

var greet = function (name) {
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

    return `Hello ${formattedName}!`
};

console.log(greet(name))