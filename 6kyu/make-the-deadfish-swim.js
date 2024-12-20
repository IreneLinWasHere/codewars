// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

let data = "iiisxxxdoso"

// Return the output array, and ignore all non-op characters
function parse(data) {
    let num = 0
    let result = []
    let key = {
        'i': () => num += 1,
        'd': () => num -= 1,
        's': () => num = num**2,
        'o': () => result.push(num)
    }

    data.split('').forEach(e => {
        if (key[e]) {
            key[e]()
        }
    })

    return result
}

console.log(parse(data))