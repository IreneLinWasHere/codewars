// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// Solution
let cc = "4556364607935616"

function maskify(cc) {
    let masked = ''
    let len = cc.length - 4
    if (len > 0){
        for (let i = 0; i < len; i++) {
            masked += '#'
        }
        return masked + cc.slice(len)
    }
    else return cc
}

console.log(maskify(cc))