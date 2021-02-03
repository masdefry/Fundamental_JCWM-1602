// NESTED LOOP ---> Loop Didalam Loop

for(let a = 0; a < 3; a++){ // Loop Outside (LO)
    for(let b = 0; b < 3; b++){ // Loop Inside (LI)
        // console.log(`Loop Outside ${a} --- Loop Inside ${b}`)
    }
}
// LO a = 0 ---> true
//      - LI b = 0 ---> true -> Loop outside 0 --- Loop inside 0
//      - LI b = 1 ---> true -> Loop outside 0 --- Loop inside 1 
//      - LI b = 2 ---> true -> Loop outside 0 --- Loop inside 2
//      - LI b = 3 ---> false
// LO a = 1 ---> true
//      - LI b = 0 ---> true -> Loop outside 1 --- Loop inside 0
//      - LI b = 1 ---> true -> Loop outside 1 --- Loop inside 1
// ...
// ...
// ...

// Ex.  ***
//      ***
//      ***

let patternPersegi = ''

for(let c = 0; c < 3; c++){
    for(let d = 0; d < 3; d++){
        patternPersegi += '*'
    }

    
    patternPersegi += '\n'
}

console.log(patternPersegi)