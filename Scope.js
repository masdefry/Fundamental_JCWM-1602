// SCOPE VARIABLE JAVASCRIPT
// - Global Scope ---> Bisa diakses dimanapun

var nama = 'Defryan'
console.log(nama)

let kampus = 'Purwadhika BSD'
console.log(kampus)



// - Local Scope ---> {...} / (...) 
//               ---> Hanya bisa diakses di dalam 
//                    scopenya saja
{
    var asal = 'Jawa Timur'
}

console.log(asal)

// var x let
// var : Tidak mengenal global maupun local scope
var nama = 'Lynette'

{
    var nama = 'Lukas'
}
console.log(nama)


// let : - Dia mengenal global scope maupun local scope
//       - Ketika kita declare di local scope, dia hanya 
//         bisa diakses di local scope itu aja

{
    let asalKota = 'Sidoarjo'
    console.log(asalKota)
}
{
    let asalKota = 'Bandung'
    console.log(asalKota)
}

let caption = 'Hobi saya futsal'
let maxCharacter = 50
let captionValidation

if(caption.length <= maxCharacter){
    captionValidation = true
}

console.log(captionValidation)


let umur = 25
{
    let umur = 20
}
console.log(umur)



// gender = 'Laki-laki'
// console.log(gender)

// data

// // Ngambil dari API ---> DB ---> API ---> data