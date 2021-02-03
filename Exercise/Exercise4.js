let hari = 485 // 1 Tahun, 4 Bulan

let tahun = Math.floor(hari / 360)
let sisaBagiTahun = hari % 360
let bulan = Math.floor(sisaBagiTahun / 30)
let sisaBagiBulan = sisaBagiTahun % 30

let printOut =`${hari} Hari = ${tahun} Tahun, ${bulan} Bulan, ${sisaBagiBulan} Hari`
console.log(printOut)
