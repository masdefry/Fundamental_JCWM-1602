// DRAWING PATTERN

// Ex. * * * * *
let outputPattern1 = ''
for(let a = 0; a < 5; a++){
    outputPattern1 += '* '
}
// outputPattern1 = ''
// a = 0 -> true -> outpuPattern1 = '*' -> a yg tadinya 0 berubah jadi 1
// a = 1 -> true -> outpuPattern1 = '* *' -> a yg tadinya 1 berubah jadi 2
// a = 2 -> true -> outpuPattern1 = '* * *' -> a yg tadinya 2 berubah jadi 3
// a = 3 -> true -> outpuPattern1 = '* * * *' -> a yg tadinya 3 berubah jadi 4
// a = 4 -> true -> outpuPattern1 = '* * * * *' -> a yg tadinya 4 berubah jadi 5
// a = 5 -> false

let outputPattern2 = ''
for(let b = 0; b < 5; b++){
    outputPattern2 += '* \n'
}
// outputPattern2 = 0
// b = 0 -> true -> outputPattern2 = '*' -> b yg tadinya 0 berubah jadi 1
//                                   ' '
// b = 1 -> true -> outputPattern2 = '*' -> b yg tadinya 1 berubah jadi 2
//                                   ' '
//                                   '*'
//                                   ' '
// b = 2 -> true -> outputPattern2 = '*' -> b yg tadinya 2 berubah jadi 3
//                                   ' '
//                                   '*'
//                                   ' '
//                                   '*'
//                                   ' '
// ...
// ...
// ...


console.log(outputPattern1)
console.log(outputPattern2)