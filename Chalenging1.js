// Ex. Buatlah program untuk mengkoreksi 
//     jawaban student dengan kunci jawaban yg tersedia
//          - Apabila jawaban benar, poin +3
//          - Apabila jawaban salah, poin -1
//          - Apabila jawaban kosong, poin 0

let kunciJawaban = ['a', 'c', 'b', 'c', 'a']
let jawabanStudent = ['a', 'c', 'd', 'a', '']
let nilaiAkhir = 0

for(let i = 0; i < jawabanStudent.length; i++){
    if(jawabanStudent[i] == ''){
        nilaiAkhir += 0
    }else if(jawabanStudent[i] == kunciJawaban[i]){
        nilaiAkhir += 3
    }else if(jawabanStudent[i] != kunciJawaban[i]){
        nilaiAkhir-- // Decrement (-1)
    }
}

console.log(nilaiAkhir)

// i = 0 : true ---> nilaiAkhir = 3
// i = 1 : true ---> nilaiAkhir = 6
// i = 2 : true ---> nilaiAkhir = 5
// i = 3 : true ---> nilaiAkhir = 4
// i = 4 : true ---> nilaiAkhir = 4
// i = 5 : false
