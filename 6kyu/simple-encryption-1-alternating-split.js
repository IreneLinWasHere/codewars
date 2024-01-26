// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

let text = "0123456"
let n = 1

function encrypt(text, n) {
    if (n <= 0 || !text) {
        return text
    } else {
        let result = text
        for (let i = 1; i <= n; i++) {
            let odd = ''
            let even = ''

            result.split('').map((e, i) => {
                i % 2 !== 0 ? odd += e : even += e
            })
            result = odd + even
        }
        return result
    }
}

let encryptedText = encrypt(text, n)

function decrypt(encryptedText, n) {
    if (n <= 0 || !encryptedText) {
        return encryptedText
    } else {
        let result = encryptedText
        for (let i = 1; i <= n; i++) {
            let oddHalf = Math.floor(encryptedText.length / 2)
            let even = result.substring(oddHalf)
            let odd = result.substring(0, oddHalf)
            let tempStr = ''

            for (let j = odd.length; j > 0; j--) {
                tempStr += even[0] + odd[0]
                even = even.substring(1)
                odd = odd.substring(1)
            }

            if (even.length > 0) {
                tempStr += even[0]
            }
            result = tempStr
        }
        return result
    }
}

console.log(encrypt(text, n))
console.log(decrypt(encryptedText, n))