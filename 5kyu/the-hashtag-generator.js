// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

let str = 'a'.repeat(139)

function generateHashtag(str) {
    let result = ''
    if (str.length < 1) return false

    let wordsArr = str.split(' ').filter(e => e)
    let formattedWords = wordsArr
        .map(word => {
            return word.split('')
                .map((let, i) => i === 0 ? let.toUpperCase() : let.toLowerCase())
                .join('')
        }).join('')
    if (formattedWords.length > 0) {
        result = `#${formattedWords}`
    }
    
    return result.length <= 140 && result.length > 0 ? result : false
}

console.log(generateHashtag(str))