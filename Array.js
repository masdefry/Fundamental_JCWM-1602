// ARRAY

// Split ---> Mengconvert string menjadi array
let str = 'Purwadhika'
console.log(str)

let strToArr = str.split('')
console.log(strToArr)

let message = 'Hello, welcome to Purwadhika'
let messageToArr1 = message.split(',')
console.log(messageToArr1)
let messageToArr2 = message.split(' ')
console.log(messageToArr2)

// Join ---> Mengconvert array menjadi string
let arr = ['Hello', 'World', 'Purwadhika']
console.log(arr.join(''))
console.log(arr.join(' '))

let date = ['Februari', 1, 2021]
console.log(date.join('/'))