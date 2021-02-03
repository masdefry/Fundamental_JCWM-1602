// NESTED ARRAY

let jenisProduct = [
    ['Apel Malang', 'Apel Manalagi'], ['Jeruk Bali', 'Jeruk Nipis'], ['Anggur Merah', 'Anggur Hitam']
]
console.log(jenisProduct[0]) // Ngedapetin Semua Data Apel
console.log(jenisProduct[1][1]) // Jeruk Nipis

console.log(jenisProduct[2][3]) // Undefined


let angka = 5

let arr = [
    angka, true, [[angka, 'Purwadhika', 10]]
]

console.log(arr[2][0][2])