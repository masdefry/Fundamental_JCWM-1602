// ARRAY
// - Array memiliki nama
// - Dapat menyimpan data lebih dari 1 didalam variable
// -Masing-masing element diberi index penomorain (dimulai dari index ke-0)
// - Menyimpan berbagai macam tipe data

// let arr = ['Purwadhika', 1, true, ['Gatra', 'Lukas', 'Patrick']]

// Case. Apps Market
// let product1 = 'Apel'
// let product2 = 'Jeruk'
// let product3 = 'Anggur'
// let product4 = 'Semangka'
// let product5 = 'Nanas'
// let product6 = '...'

let product = ['Apel', 'Jeruk', 'Anggur', 'Semangka', 'Nanas']

// CRUD (Create, Read, Update, Delete)
// Cara Read Data Didalam Array
console.log(product[2])
console.log(product[4])
console.log(product[0])

// Cara Update Data Didalam Array
product[4] = 'Lemon'
product[1] = 'Pepaya'
console.log(product)

product[5] = 'Jeruk Bali'
product[7] = 'Jeruk Nipis'
console.log(product)

console.log(product.length)

// Cara Delete Data Didalam Array
let locker = ['Buku', 'Pakaian', 'Laptop']
delete locker[1]

console.log(locker)



// Method Array
// Push ---> Menambah data di index paling akhir
product.push('Alpukat')
product.push('Salak')
console.log(product)

// Pop ---> Menghapus data di index paling akhir
product.pop()
console.log(product)

// Unshift ---> Menambah data di index paling awal
product.unshift('Stroberi')
console.log(product)

// Shift ---> Menghapus data di index paling awal
product.shift()
console.log(product)

// Splice ---> Tambah Data, Update Data, Menghapus Data ---> Menghasilkan Array Bentuk Baru
// Syntax :
//      arr.splice(startindex, amount, new data)
//      - Start index : Dimulai dari index ke-...
//      - Amount : Jumlah data yang akan dihapus
//      - New Data : Data bakalan ditambahkan sesuai dengan start index 

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun']

months.splice(6, 0, 'Juli', 'Agustus')
console.log(months)

months.splice(1, 2) // Menghapus 2 data, dimulai dari index ke-1 ---> [Jan, Apr, Mei, Jun]
months.splice(0, 1) // Menghapus 1 data, dimulai dari index ke-0 ---> [Apr, Mei, Jun]
console.log(months)

months.splice(1, 2, 'Juliii') // Menghapus 2 data, dimulai dari index ke-1. Menambahkan data Juliii
console.log(months)

// Slice

let days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum']
// Mengambil data dari index ke-x hingga index ke-y (index ke-y nggak ikutan diambil)
console.log(days.slice(0, 3)) // [Sen, Sel, Rabu]
console.log(days.slice(1, 2)) // [Sel]

// Includes & Index Of
// Includes ---> Mencari tahu apakah array yg kita buat menyimpan data tertentu
// Index Of ---> Mencari data kita ada di index ke berapa?

let locker1 = ['Jam Tangan', 'HP', 'Laptop', 'Keyboard', 'Mouse']
console.log(locker1.includes('Jam Tangan'))
console.log(locker1.indexOf('Laptop'))

// Sort
let angkaAcak = [5, 9, 3, 2, 10, 22, 40, 30]
console.log(angkaAcak.sort((a, b) => a-b))
console.log(angkaAcak.sort((a, b) => b-a))