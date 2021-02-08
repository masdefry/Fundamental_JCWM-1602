// MULTIPLICATION TABLE
// Ex.  1 2 3  ||  i = 1; j = 1, 2, 3 ---> Looping inside : i*j
//      2 4 6  ||  i = 2; j = 2, 4, 6
//      3 6 9  ||  i = 3; j = 3, 6, 9

function multiplicationTable(a, b){
    let output = ''

    for(let i=1; i <= a; i++){
        for(let j=1; j <= b; j++){
            output += `${i*j} `
        }

        output += `\n`
    }

    console.log(output)
}

multiplicationTable(3, 3)