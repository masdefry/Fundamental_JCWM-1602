// FUNCTION
// Block of code / sekumpulan baris yang memiliki nama dan dapat digunakan 
// secara berulang-ulang

// Tahapan ngebikin function :
//      - Build ---> Bikin function sekali
//      - Call  ---> Bisa kita gunain berkali-kali

// // Case. Tampilkan kata Javascript sebanyak 10x
// let kata = 'Javascript'
// for(let i = 0; i < 10; i++){
//     console.log(kata)
// }

// // Sometime, kita ingin melakukan perintah yg sama
// for(let y = 0; y < 10; y++){
//     console.log(kata)
// }

// Syntax :
//      function namaFunction(){
//          block of code
//      }

function printPesan(){
    let kata = 'Javascript'

    for(let i = 0; i < kata.length; i++){
        console.log(kata)
    }
}

printPesan()

// 2 Tipe Function :
//      - Function Declaration
// function declaration(){
//     console.log('Function Declaration')
// }

//      - Function Expression
// let expression = function(){
//     console.log('Function Expression')
// }

// declaration()
// expression()



// Ex. Buatlah function untuk memperkenalkan diri
// function kenalan(){
//     console.log('Nama Saya Defry')
//     console.log('Hobi Saya Futsal')
//     console.log('Asal Saya Jawa Timur')
// }

// kenalan()


// FUNCTION WITH PARAMETER
// Function yg menerima parameter / inputan dari luar
// Parameter ngebikin functionnya menjadi lebih fleksibel

function kenalanV1(name){
    console.log(`Nama Saya ${name}`)
    console.log(`Hobi Saya Futsal`)
    console.log(`Asal Saya Jawa Timur`)
}

kenalanV1('Ibnu')

function kenalanV2(name, hobby, address){
    console.log(`Nama Saya ${name}`)
    console.log(`Hobi Saya ${hobby}`)
    console.log(`Asal Saya ${address}`)
}

kenalanV2('Fandi', 'Ngoding', 'Indonesia')

// Ex. Buatlah function untuk menjumlahkan 2 buah bilangan
// function penjumlahan(angka1, angka2){
//     let hasil = angka1 + angka2
//     console.log(hasil)
// }

// penjumlahan(10, 3)
// penjumlahan(3, 3)

// FUNCTION WITH RETURN
// Function yg menghasilkan sesuatu value
// Valuenya bisa kita gunain untuk task berikutnya / task lainnya

// Tanpa Return
function perkalianV1(angka1, angka2){
    let hasil = angka1 * angka2
    console.log(hasil)
}

// FUNCTION RETURN
function perkalianV2(angka1, angka2){
    let hasil = angka1 * angka2
    console.log(hasil)

    return hasil
}

perkalianV1(3, 3)
perkalianV2(5, 5)

let hasilPerkalianFinalV1 = perkalianV1(3, 3) * 3
let hasilPerkalianFinalV2 = perkalianV2(5, 5) * 5

console.log(hasilPerkalianFinalV1)
console.log(hasilPerkalianFinalV2)

// Ex.
function operasi(angka1, angka2, operator){
    let hasilJumlah = angka1 + angka2
    let hasilKali = angka1 * angka2

    if(operator == '+'){
        return hasilJumlah
    }else if(operator == '*'){
        return hasilKali
    }
}

let hasilOperasi = operasi(3, 5, '*')
console.log(hasilOperasi)


// FUNCTION WITH DEFAULT PARAMETER
function sapa(nama = 'Anynomous'){
    console.log(`Hello ${nama}`)
}

sapa('Defryan')
sapa()
sapa('Wahyu')

// CALLBACK FUNCTION
function printPesan(pesan){
    console.log(pesan)
}

function luasSegitiga(alas, tinggi, print){
    let luas = alas * tinggi

    print(`Luas Segitiga Dari ${alas} x ${tinggi} = ${luas}`)
}

luasSegitiga(3, 5, printPesan)