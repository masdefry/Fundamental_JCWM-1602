// LOGICAL OPERATOR ---> Untuk mengcompare lebih dari 2 kondisi
// - && (AND)
// - || (OR)
// - ! (NOT)

// && (AND) ---> Salah 1 kondisi bernilai false, maka hasil akhir akan false
//          ---> Dua kondisi harus bernilai true apabila hasil akhir ingin true

let beratBadanLecturer = 68
console.log(beratBadanLecturer > 50 && beratBadanLecturer < 90) // true && true ---> true
console.log(beratBadanLecturer > 50 && beratBadanLecturer < 60) // true && false ---> false

// || (OR) ---> Salah 1 kondisi bernilai true, maka hasil akhir akan true
//         ---> Dua kondisi harus bernilai false apabila hasil akhir ingin false

let beratBadanStudent = 50
console.log(beratBadanStudent > 30 || beratBadanStudent == 0) // true || false ---> true
console.log(beratBadanStudent == 30 || beratBadanStudent == 0) // false || false ---> false

// ! (NOT) 
let result = beratBadanStudent > 30 || beratBadanStudent == 0
console.log(!result)

console.log(!(beratBadanStudent >= 50 || beratBadanStudent > 0))