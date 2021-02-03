// CONDITIONAL STATEMENT
// Kadang dalam program kita perlu menajalankan action berdasarkan kondisi tertentu
// Kondisi disini bisa berdasarkan comparison/logical

// - IF ---> Akan dijalankan ketika kondisinya true
// Syntax : 
//      if(condition == true){
//          action
//      }

let nilaiModul1 = 90

if(nilaiModul1 < 70){ // false
    console.log('Remedial') // Maka remedial tidak dijalankan
}

if(nilaiModul1 >= 70){
    console.log('Lulus')
}

// - IF ELSE
// Syntax :
//      if(condition == true){
//          action
//      }else{
//          action default
//      }

let nilaiModul2 = 70

if(nilaiModul2 > 70){ // false
    console.log('Lulus')
}else{
    console.log('Remedial')
}

if(nilaiModul2 > 50){
    console.log('Lulus')
}else{
    console.log('Tidak Lulus')
}


// - IF - ELSE IF - ELSE ---> Ketika 1 if bernilai true, program dibawahnya nggak akan dijalankan
//                       ---> Ketika seluruh if bernilai false, maka action default dijalankan
// Syntax :
//      if(condition == true){
//          action
//      }else if(condition == true){
//          action
//      }else{
//          action default
//      }

let nilaiModul3 = 90
if(nilaiModul3 < 70){ // false
    console.log('Kamu Harus Remedial')
}else if(nilaiModul3 >= 70 && nilaiModul3 < 90){ // true && false ---> false
    console.log('Kamu Lulus Dengan Nilai Baik')
}else{
    console.log('Kamu Lulus Dengan Nilai Sempurna')
}



let nilaiModul4 = 60
if(nilaiModul4 < 70){ // true
    console.log('Kamu Remedial')
}else if(nilaiModul4 >= 70 && nilaiModul4 < 90){
    console.log('Kamu Lulus Nilai Baik')
}else{
    console.log('Kamu Lulus Nilai Sempurna')
}



let nilaiModul5 = 70
if(nilaiModul5 < 70){
    console.log('Kamu Remedial')
}else if(nilaiModul5 >= 70 && nilaiModul5 < 80){
    console.log('Kamu Lulus Nilai Baik')
}else if(nilaiModul5 >= 80 && nilaiModul5 < 90){
    console.log('Kamu Lulus Nilai Hampir Sempurna')
}else{
    console.log('Kamu Lulus Nilai Sempurna')
}


// Ini menggunakan if aja, jadi bakalan di cek 1 per 1. 
let nilaiProjectAkhir = 80
if(nilaiProjectAkhir <= 80){ // true
    console.log('Kamu Harus Mengulang')
}
if(nilaiProjectAkhir < 90){ // true
    console.log('Kamu Lulus Dengan Baik')
}
if(nilaiProjectAkhir < 100){ // true
    console.log('Kamu Lulus Dengan Baik Banget')
}
if(nilaiProjectAkhir > 90){
    console.log('Kamu Lulus Dengan Sempurna')
}


// NESTED CONDITION ---> If didalam if
let angka = 10

if(angka > 0){ // true
    if(angka > 10){
        console.log('Angkanya Besar')
    }else{
        console.log('Angkanya Kecil')
    }
}else{
    console.log('Angka Minus')
}


// - SWITCH CASE
let pekerjaan = 'Programmer'
switch(pekerjaan){
    case 'Programer' :
        console.log('Profesinya Seorang Programmer')
        break; // Semicolon
    case 'Manager' :
        console.log('Profesinya Seorang Manager'); break
    default :
        console.log('Dia Seorang Student')
}