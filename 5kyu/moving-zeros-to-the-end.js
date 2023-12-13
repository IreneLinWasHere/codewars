// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

let arr = [false,1,0,1,2,0,1,3,"a"]
function moveZeros(arr) {
    let noZeros = arr.filter(char => char !== 0)
    let zeros = arr.filter(char => char === 0)
    return noZeros.concat(zeros)
  }

  console.log(moveZeros(arr))