// OBJECT
// Sama seperti array, berfungsi untuk menyimpan data lebih dari 1
// Jika di array, data daiberi label index penomoran
// Di object, dia menggunakan pasangan "key" & "value"

// ANALOGI ---> Semua benda yg kita lihat itu object
//         ---> Setiap object itu punya properti

// Ex. Object : Laptop
//     Properties :
//          - Merk : Lenovo Ideapad
//          - Warna : Hitam
//          - Ukuran Layar : 15.6
//          - Etc.

// CRUD (Create, Read, Update, Delete)

// CREATE
// Syntax Literal
let laptop1 = {
    merk : 'Lenovo Ideapad',
    warna : 'Hitam',
    ukuran : 15.6
}

let laptop2 = {
    merk : 'Asus ROG',
    warna : 'Putih',
    ukuran : 14
}

// Syntax New
let laptop3 = new Object()
laptop3.merk = 'HP Pavilion'
laptop3.warna = 'Hijau'
laptop3.ukuran = 15.6

console.log(laptop1)
console.log(laptop2)
console.log(laptop3)


// READ
console.log(laptop1.merk)
console.log(laptop1.warna)
console.log(laptop2.ukuran)

let laptop4 = {
    merk : 'ASUS TUF',
    warna : {
        warna1 : 'Hitam',
        warna2 : 'Putih',
        warna3 : 'Biru'
    },
    ukuran : 15.6
}

console.log(laptop4.warna.warna1)
console.log(laptop4.warna.warna2)

// UPDATE
laptop1.merk = 'Lenovo Ideapad Gaming 3i'
laptop1.warna = 'Biru Dongker'
laptop1.ukuran = 14
laptop1.harga = 16000000

console.log(laptop1)

// DELETE
delete laptop1.harga
console.log(laptop1)