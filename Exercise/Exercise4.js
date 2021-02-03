// SWAP STRING
// Ex. Makan Hati ---> Hati Makan

let kata = 'Makan Hati'

let indexSpasi = kata.indexOf(' ')

let kataPertama = kata.slice(0, indexSpasi)
let kataKedua = kata.slice(indexSpasi+1, kata.length)

let output = kataKedua + ' ' + kataPertama

console.log(output)



// Cara 2
let kataToArr = kata.split(' ') // ['Makan', 'Hati']
// console.log(kataToArr)

let output1 = kataToArr[1] + ' ' + kataToArr[0]
console.log(output1)