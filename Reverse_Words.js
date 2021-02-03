let str = 'Hai Defryan'

let strToArr = str.split(' ') // ['Hai', 'Defryan']
console.log(strToArr)

// let output = ''
for(let i = 0; i < strToArr.length; i++){
    let str = strToArr[i]

    for(let y = str.length-1; 0 <= y; y--){
        output += str[y]
    }
}

// i = 0 : 0 < 2? true
//      str = Hai // length 3
//      - y = 2 : 0 <= 2? true
//        output = i
//      - y = 1 : 0 <= 1? true
//        output = ia
//      - y = 0 : 0 <= 0? true
//        output = iaH
//      - y = -1 : 0 <= -1? false

// OUTPUT = iaH

// i = 1 : 1 < 2? true
//      str = Defryan // Length 7 
//      - y = 6 : 0 <= 6? true
//        output = iaHn
//      - y = 5 : 0 <= 5? true
//        output = iaHna
//      - y = 4 : 0 <= 4? true
//        output = iaHnay
//      ...
//      - y = 0 : 0 <= 0? true
//        output = iaHnayrfeD
//      - y = -1 : 0 <= -1? false