// TERNARY OPERATOR
// Merupakan shortcut dari conditional statement if ... else

// Case. Buatlah program untuk mengecek bilangan genap / ganjil
// #1. if ... else
let number = 20
if(number % 2 == 0){
    console.log('Bilangan Genap')
}else{
    console.log('Bilangan Ganjil')
}
// #2 Ternary Operator
// Syntax :
//  condition ? action if true : action if false
number % 2 == 0? console.log('Bilangan Genap') : console.log('Bilangan Ganjil')
number % 2 == 0 && number > 10? console.log('Bilangan Genap & Angka Besar') : console.log('Bilangan Aja')

// Ex. Check angka apakah dia bernilai negatif, nol, positif?
// #1 if ... else if ... else
let angka = 10
if(angka == 0){
    console.log('Bilangan Nol')
}else if(angka > 0){
    console.log('Bilangan Positif')
}else{
    console.log('Bilangan Negatif')
}

// #2 Ternary Operator
angka == 0? console.log('Bilangan Nol') : angka > 0? console.log('Bilangan Positif') : console.log('Bilangan Negatif')



// ARROW FUNCTION
// 1. Apabila parameter hanya 1, maka boleh menggunakan () / tidak
// 2. Jika block code lebih dari 1 baris, maha harus menggunakan {...}
// 3. Jika block code hanya 1 baris, dia otomatis me-return

// Case. Buatlah fungsi untuk menentukan apakah bilangan tersebut habis dibagi 5
// #1 
function habisDibagiLima(num){
    num % 5 == 0? true : false
}

let output1 = habisDibagiLima(10)

// #2 Arrow Function
let checkMod5 = (num) => num % 5 == 0? console.log(true) : console.log(false)
checkMod5(25)

let checkMod5Lainnya = (num) => {
    if(num % 5 == 0){
        console.log(true)
    }else{
        console.log(false)
    }
}

checkMod5Lainnya(9)


// SPREAD OPERATOR ---> ...
// References Copy vs. Full Copy

// References Copy
let arrLama = [1, 2, 3, 4, 5]
let arrBaru = arrLama

arrBaru[0] = 10
console.log(arrBaru)
console.log(arrLama)

// Full Copy ---> Ketika kita update array copyannya, maka array aslinya tidak berubah
let arrOriginal = ['A', 'B', 'C']
let arrCopy = [...arrOriginal]

arrCopy[0] = 'D'
console.log(arrCopy)
console.log(arrOriginal)

const objOriginal = {
    nama : 'Fandi Ario',
    hobby : 'Ngoding'
}

let objCopySprd = {...objOriginal, kewarganegarran : 'Indonesia'}
let objCopyRfrnc = objOriginal

objCopyRfrnc.nama = 'Lukas'
console.log(objCopyRfrnc)
console.log(objOriginal)


// HIGH ORDER FUNCTION ---> Function yg menggunakan callback
// Callback Function ---> Function yg menjadi input untuk function lain

let arr = [2, 4, 6, 3, 6, 9]

arr.forEach((value, index) => console.log(value + 'Berada Di Index Ke-' + index))

arr.forEach(
    function callback(value, index){
        console.log(value)
    }
)

