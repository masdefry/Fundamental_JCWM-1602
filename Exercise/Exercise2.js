// MERGE 4 DIGIT
// Ex. 35 & 22 ---> 3252

let angka1 = 35
let angka2 = 22

let angka1ToStr = angka1.toString() // '35'
let angka2ToStr = angka2.toString() // '22'

let output = angka1ToStr.slice(0, 1) + angka2ToStr.slice(0, 1) + angka1ToStr.slice(1, 2) + angka2ToStr.slice(1, 2)

console.log(Number(output))