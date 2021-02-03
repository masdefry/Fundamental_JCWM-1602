// COMPARISON OPERATOR ---> Operator yang akan menghasilkan nilai boolean (true/false)
// >, >=, <, <=, ==, ===, !=

let angka1 = 10
let angka2 = 20
// console.log(angka1 == angka2)

let angka3 = 50
let angka4 = 50
// console.log(angka3 > angka4) // false
// console.log(angka3 >= angka4) // true
// console.log(angka3 != angka4) // false

let angka5 = 3
let angka6 = '3'
// console.log(angka5 == angka6) // true
// console.log(angka5 === angka6) // false

// console.log(5 === 5) // true

let angka7 = 10
let angka8 = 10
let angka9 = `${angka8}` // Disini karena dianggap sebagai string
console.log(angka7 === angka9) // false

// Note : String Dapat Menyimpan 2 Data, 1 Data Numeric & 1 Data Alphabet

let text1 = 'Saya'
let text2 = 'Kamu'
console.log(text1 == text2)