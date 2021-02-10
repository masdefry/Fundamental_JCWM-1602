// PATTERN SEGITIGA 
// Ex. 1        || i=1 ; j = 1
//     3 5      || i=2 ; j = 3 5
//     7 9 11   || i=3 ; j = 7 9 11

function patternSegitiga(number){
    let output = ''

    let lastNumber = 0
    for(let i=1; i <= number; i++){
        for(let j=1; j <= i; j++){
            if(i == 1){
                output += `${i} `
                lastNumber = 1
            }else{
                output += `${lastNumber + 2} `
                lastNumber = lastNumber + 2
            }
        }

        output += '\n'
    }

    console.log(output)
}

patternSegitiga(3)

// PATTERN PERSEGI BERLUBANG
// Ex. 1 2 3
//     4   6
//     7 8 9

function persegiLubang(number){
    let output = ''

    let startNumber = 1
    for(let i=1; i <= number; i++){
        for(let j=1; j <= number; j++){
            if(number % 2 == 1){
                if(i == 1 || i == number){
                    output += `${startNumber} `
                    startNumber++
                }else{
                    if(j == 1 || j == number){
                        output += `${startNumber} `
                        startNumber++
                    }else{
                        output += `  `
                        startNumber++
                    }
                }
            }
        }

        output += '\n'
    }

    console.log(output)
}

persegiLubang(5)