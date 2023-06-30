// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// Solution
let str = "hello world"

var encryptThis = function(str) {
    return str.split(' ')
      .map(s => {
        const charCodes = [...s].map((v, i, a) => {
          if (i === 0) {
            return v.charCodeAt(0);
          } else if (i === 1) {
            return a[a.length - 1];
          } else if (i === a.length - 1) {
            return a[1];
          } else {
            return v;
          }
        });
        return charCodes.join('');
      }).join(' ');
  }
 
console.log(encryptThis(str))