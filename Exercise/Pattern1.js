// *       | i = 0; y = 0
// * *     | i = 1; y = 0 1
// * * *   | i = 2; y = 0 1 2

patternSegitiga = ''

for(let i = 0; i < 3; i++){
    for(let y = 0; y <= i; y++){
        patternSegitiga += '* '
    }

    patternSegitiga += '\n'
}
console.log(patternSegitiga)

// i = 0 ---> y = 0 : 0 <= 0 ---> *
//       ---> y = 1 : 1 <= 0

// i = 1 ---> y = 0 : 0 <= 1 ---> *
//       ---> y = 1 : 1 <= 1 ---> * *
//       ---> y = 2 : 2 <= 1

// i = 2 ---> y = 0 : 0 <= 2 ---> *
//       ---> y = 1 : 1 <= 2 ---> * *
//       ---> y = 2 : 2 <= 2 ---> * * *
//       ---> y = 3 : 3 <= 2