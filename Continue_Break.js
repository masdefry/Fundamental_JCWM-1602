// BREAK & CONTINUE

// BREAK ---> Untuk menghentikan looping
// Ex.
let myName = 'Ibnu' // Ibnu ---> Ibnuu

while(myName.length < 10){ // true ---> true
    console.log(myName) // Ibnu ---> Ibnuu

    if(myName.length >= 5){ // false ---> True
        break
    }

    myName += 'u'
}

// CONTINUE ---> Untuk melewati action yg berada di bawahnya
// Ex. Buatlah looping untuk menampilkan bilangan yg bernilai genap saja 1 -15
let a = 1

while(a <= 15){
    if(a % 2 != 0){
        a++
        continue
    }

    console.log(`Bilangan ${a}`)
    a++
}

// a = 1 : true ---> true ---> continue
// a = 2 : true ---> false ---> console.log(2)
// a = 3 : true ---> true ---> continue
// ...
// a = 15 : true ---> true ---> continue
// a = 16 : false