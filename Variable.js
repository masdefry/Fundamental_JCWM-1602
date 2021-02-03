// VARIABLE ---> Tempat untuk menyimpan data
//          ---> Variable hanya dapat menyimpan 1 data saja

// Case. Client menyuruh kita membuat program untuk menampilkan kata "Hello World" sebanyak 10X
console.log("Hello World!")
console.log("Hello World!")
console.log("Hello World!")
console.log("Hello World!")
console.log("Hello World!")
console.log("Hello World!")
console.log("Hello World!")
console.log("Hello World!")
console.log("Hello World!")
console.log("Hello World!")

// Cara Membuat Variable : var nama_variable
var namaku

// Assign Value Kedalam Variable : nama_variable = value
namaku = "Defryan"

var namamu = "Ibnu" // Declare & assign variable secara bersamaan

console.log(namaku)
console.log(namamu)

var namasiswa = "Gatra"
var namasiswa = "Lukas"
namasiswa = "Fajri" // Replace
console.log(namasiswa)

var namastudent = "Lynette"
namastudent = "Patrick"
console.log(namastudent)

// Declare Multiple Variable : var nama_variable1, nama_variable2, nama_variable3
var namasaya, hobisaya, usiasaya
namasaya = "Defryan"
hobisaya = "Ngoding"
usiasaya = 20


// Aturan Penamaan Variable
// 1. Buatlah nama variable dengan nama yg jelas (tidak ambigu)
var datanama = "Pahala Kencana"
var namaanak = "Pahala Kencana"

// 2. Tidak boleh memberikan penamaan dengan syntax bawaan dari Javascript
// var var
// var console.log

// 3. Penamaan variable selalu diawali dengan huruf (tidak boleh diawali dengan angka atau symbol apapun)
// var 1namaku
// var #namaku
var namaku1

// 4. Penamaan variable tidak boleh menggunakan spasi (sambungkan dengan _ atau gunakan 'camelCase')
var nama_saya
var namaKamu
var namaKamuAdalah
var NamaSaya


// Modern Syntax Declaration ---> Declare variable dengan syntax terbaru ---> let & const (ES6)
// let : let nama_variable
let namaLecturer = "Defry"
let usiaLecturer = 25
let asalLecturer = "Bandung"

// const ---> Constant ---> Variable yg valuenya tidak bisa diubah
const biru = "Biru"
// biru = "Merah"
console.log(biru)

// Perbedaan var x let x const
// var : Bisa ngebuat nama variable dengan nama yg sama lebih dari 1
var game = "PES2021"
var game = "FIFA21"
console.log(game)

// let : Tidak bisa ngebuat variable dengan nama yg sama 
let laptop = "Asus ROG"
// let laptop = "Lenovo Ideapad Gaming"
console.log(laptop)

// const : Tidak bisa ngebuat variable dengan nama yg sama, serta valuenya tidak bisa diubah

let namaTempatBandung = "Gedung Sate"
let namaTempatJakarta = "Monas"
// 
// 
// 
// 
// 
console.log(namaTempatBandung)

let namaBuah = "Apel"
let namabuah = "Pepaya"
console.log(namaBuah)
console.log(namabuah)