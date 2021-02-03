// LOOPING ARRAY
//  let nama = 'Defry'

//  for(let i = 0; i < nama.length; i++){
//      console.log(nama[i])
//  }

// //  i = 0 : true ---> console.log('D')
// //  i = 1 : true ---> console.log('e')
// //  i = 2 : true ---> console.log('f')
// // ...
// //  i = 4 : true ---> console.log('y')
// //  i = 5 : false

let users = ['Ibnu', 'Lynette', 'Joko', 'Fandi', 'Wahyu', 'Defryan' , 'Fajri']
// Case. Tampilkan semua data nama di dalam array users
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])

for(let a = 0; a < users.length; a++){
    console.log(users[a])
}



// Ex. Filter angka bernilai ganjil di dalam array number berikut
let numbers = [2, 5, 10, 100, 99, 76, 34, 52, 33, 35]
let output = []

for(let b = 0; b < numbers.length; b++){
    if(numbers[b] % 2 != 0){
        output.push(numbers[b])
    }
}

console.log(output)

// b = 0 : true ---> false
// b = 1 : true ---> true ---> output = [5]
// ...
// 

// Ex. Tampilkan data yg bertipe string di dalam araay berikut
let dataAcak = [true, 'Wahyu', 10, ['Hello', 'Student'], false, 3, 'Javascript']

for(let c = 0; c < dataAcak.length; c++){
    if(typeof dataAcak[c] == 'string'){
        console.log(dataAcak[c])
    }
}