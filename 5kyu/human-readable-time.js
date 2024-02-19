// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

let seconds = 359999

function humanReadable(seconds) {
    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds % 3600) / 60)
    let secs = Math.round(seconds % 60)

    const formatTime = time => String(time).padStart(2, '0')

    return `${formatTime(hrs)}:${formatTime(mins)}:${formatTime(secs)}`
}

console.log(humanReadable(seconds))