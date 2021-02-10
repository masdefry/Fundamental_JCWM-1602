// FIND MULTIPLES
function findMultiples(angka, limit){
    let arrResult = [] // [3, 6, 9]

    for(let i=angka; i <= limit; i+=angka){
        arrResult.push(i)
    }

    // let start = angka
    // while(start <= limit){
    //     arrResult.push(start)
    //     start += angka
    // }

    console.log(arrResult)
}

findMultiples(3, 10) // [3, 6, 9]
findMultiples(3, 5) // [3]
findMultiples(2, 10) // [2, 4, 6, 8, 10]