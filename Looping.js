// LOOPING STATEMENT
// Kadang kita ingin mengeksekusi kode yg sama secara berulang-ulang
// Condition ---> Selama kondisi true, maka action jalan terus
// Action ---> Selalu dijalankan ketika kondisinya true
// Exit Way ---> Supaya tidak terjadi infinite loop (ex. increment)

// Case. Tampilkan Hello Defryan sebanyak 5x
let text = 'Hello World'
// console.log(text)
// console.log(text)
// console.log(text)
// console.log(text)
// console.log(text)

// WHILE ---> Cek kondisi dahulu, baru jalanin action
// Syntax :
//      while(condition){
//          action
//      }

// Initial Condition
let a = 0 // 0 ---> 1 ---> 2 ---> 3 ---> 4 ---> 5

while(a < 5){ // true ---> true ---> true ---> true ---> true ---> false
    //console.log('Hello Defryan') // Dijalankan : 1x ---> 2x ---> 3x ---> 4x ---> 5x

    // Increment ---> Variable a + 1
    a++ 
}

// Ex. Tampilkan angka mulai dari 1-3
let angka = 1

while(angka <= 3){
    // console.log(angka)
    angka++ // Exit way agar tidak infinite loop
}
// Angka = 1 : true ---> console.log(1) ---> angka yg tadinya 1, berubah jadi 2
// Angka = 2 : true ---> console.log(2) ---> angka yg tadinya 2, berubah jadi 3
// Angka = 3 : true ---> console.log(3) ---> angka yg tadinya 3, berubah jadi 4
// Angka = 4 : false


// DO WHILE ---> jalanin action baru, baru cek kondisinya
// Syntax :
//      do{
//          action
//      while(condtion)
let b = 1
do{
    // console.log(b)
    b++
}while(b < 11)



// Case. While vs. Do While
let number = 10
while(number < 5){ // false
    console.log(number)
    number++
}

do{
    console.log(number) // 1x
    number++
}while(number < 5) // false



// FOR LOOP
// Syntax :
//      for(initial condition; condition; exit way){
//          action
//      }

for(let c = 1; c <= 5; c++){
    console.log(c)
}

for(let nama = 'Defryan'; nama.length < 10; nama += 'n'){
    console.log(nama)
}
// nama = Defryan : true ---> console.log(Defryan) ---> nama Defryan -> Defryann
// nama = Defryann : true ---> console.log(Defryann) ---> nama Defryann -> Defryannn
// nama = Defryannn : true ---> console.log(Defryannn) ---> nama Defryannn -> Defryannnn
// nama = Defryannnn : false

let angka3 = 3
while(angka3 < 10){
    console.log(angka3)
    angka3 = 100
}

