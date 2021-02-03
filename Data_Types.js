// DATA TYPES / TIPE DATA
// - Masing-masing tipe data memiliki behavournya masing-masing (sifat masing-masing)
// - Masing-masing tipe data memiliki methodnya masing-masing
//   (method itu semacam senjata untuk memanipulasi data)

// Tipe Data Primitive : String, Number, Boolean, Undefined
// Tipe Data References : Array, Object, Date Object, ...

// STRING ---> Tipe data yang berbentuk teks. Ciri-cirinya selalu diapit dengan '...' / "..." / `...`
let nama = 'Ansor'
nama = "Fajri"
nama = `Gatra`

let usia = '20' // String karena diapit dengan petik

console.log(typeof(nama)) // typeof digunakan untuk ngebuktiin tipe data dari suatu value
console.log(typeof(usia))

// NUMBER ---> Tipe data yang berbentuk number
let angka = 10
let discount = 7.5 // Floating number (bilangan pecahan)

// BOOLEAN ---> Merupakan tipe data yang valuenya bernilai true / false saja
let graduated = true
let married = false
console.log(graduated)
console.log(married)
console.log(typeof(graduated))
console.log(typeof(married))

// UNDEFINED ---> Merupakan tipe data yang tidak terdefinisi (ex. ketika ngedeclare variable saja)
let data
console.log(data)

// Cont. STRING
let angka1 = '20'
let angka2 = '21'
console.log(angka1 + angka2)

let namaku = 'Ryan'
let alamatku = 'Bandung'
let output1 = namaku + alamatku // Diconcate / digabungin
let output2 = namaku - alamatku // NaN (Not a Number)
console.log(output1)
console.log(output2)

let perkenalan =  'Nama Saya ' + namaku + ', Alamat Rumah Saya ' + alamatku
console.log(perkenalan)

// String Template Literal ---> Harus diapit dengan `...`
let perkenalan1 = `Nama Saya ${namaku}, Alamat Rumah Saya ${alamatku}`
console.log(perkenalan1)



// Cont. NUMBER ---> Kita bisa melakukan seluruh operasi aritmatika (+, -, *, /, % mod)
let number1 = 20
let number2 = 5
console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)

// Modulus : Hasil dari sisa pembagian
console.log(4 % 2) // 0
console.log(10 % 3) // 1
console.log(5 % 2) // 1




// METHOD
// - String : https://www.w3schools.com/js/js_string_methods.asp
let caption = 'Belajar bahasa pemrograman Javascript'
console.log(caption.length)
console.log(caption.indexOf('m')) // Mencari posisi karakter m berada di index ke-berapa?
console.log(caption.slice(0, 3)) // Mengambil karakter dimulai dari index ke-... sampai index ke-...
console.log(caption.substr(3, 5)) // Megambil karakter dari index ke-... sebanyak ... karakter
console.log(caption.substring(3, 5))

// - Number
// To String : Mengkonversi number to string
// Case. Membuat program untuk mengambil 3 angka pertama
// Step. 1. Ubah dulu number menjadi string
//       2. Lalu ambil 3 string pertama menggunakan slice

// [Case]
let data_nomor = 39842329382

// [Step. 1] Ubah dulu number menjadi string
let data_nomor_string = data_nomor.toString() // '39842329382'

// [Step. 2] Lalu ambil 3 nomor yang pertama
let tiga_nomor_pertama = data_nomor_string.slice(0, 3)

// [Step. 3] Kita ubah menjadi number lagi
let tiga_nomor_pertama_number = parseInt(tiga_nomor_pertama)

console.log(tiga_nomor_pertama_number)
