// FIND SHORT SENTENCE
// Ex. Purwadhika Digital School ---> School

// Step :
//  1. Untuk mengetahui panjang karakter masing-masing kalimat ---> split
//  2. Looping untuk mengetahui panjang length masing-masing kalimat

function findShort(kalimat){
    // CARA #1
    // let arrKalimat = kalimat.split(' ') // [Purwadhika, Digital, School]
    
    // let panjangKarakter = 0 

    // for(let i=0; i < arrKalimat.length; i++){       // i=0, Purwadhika, panjangKarakter = 10
    //     if(i == 0){                                 // i=1, Digital, panjangKarakter = 7
    //         panjangKarakter = arrKalimat[i].length  // i=2, School, panjangKarakter = 6
    //     }

    //     if(arrKalimat[i].length < panjangKarakter){
    //         panjangKarakter = arrKalimat[i].length
    //     }
    // }

    // return panjangKarakter

    // CARA #2
    let arrKalimat = kalimat.split(' ')

    let panjangPerKalimat = []

    for(let i=0; i < arrKalimat.length; i++){
        panjangPerKalimat.push(arrKalimat[i].length)
    }

    panjangPerKalimat = panjangPerKalimat.sort((a, b) => a - b)
    console.log(panjangPerKalimat[0])

    panjangKalimatMin = Math.min(...panjangPerKalimat)
    console.log(panjangKalimatMin)
}

findShort('Purwadhika Digital School')