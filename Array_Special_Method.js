// LOOP SPECIAL METHOD ---> .forEach, .map, .filter

let arrNumber = [3, 5, 9, 2, 4, 8]
for(let i = 0; i < arrNumber.length; i++){
    console.log(arrNumber[i])
}

// .forEach ---> Melooping setiap element di dalam array
arrNumber.forEach(element => console.log(element))

// .map ---> Melooping setiap element di dalam array
//      ---> Tujuannya untuk memodifikasi tiap elementnya
//      ---> Menghasilkan array baru
let hasil = arrNumber.map(element => element * 2)
console.log(hasil)
console.log(arrNumber)


// .filter ---> Sama seperti .map
//         ---> Array baru yg dihasilkan panjangnya tidak harus sama dengan array aslinya
let arrAcak = [10, 'Javascript', true, 'false', 'Purwadhika', 55]
let arrStr = arrAcak.filter(element => typeof element == 'string')
console.log(arrStr)
console.log(arrAcak)