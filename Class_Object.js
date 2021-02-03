// CLASS OBJECT
// Cetakan untuk membuat banyak object dengan property yg sama

class Siswa{
    // Create Properties
    constructor(a, b, c){
        this.nama = a
        this.jenisKelamin = b
        this.umur = c
    }
}

let siswa1 = new Siswa('Ibnu', 'Laki-Laki', 30)
let siswa2 = new Siswa('Lukas', 'Laki-Laki', 20)

console.log(siswa1)
console.log(siswa2)

class Laptop{
    // Create Propeties
    constructor(merk, warna, ukuran, ram){
        this.merk = merk
        this.warna = warna
        this.ukuran = ukuran
        this.ram = ram
    }
}

let laptop1 = new Laptop('Lenovo Idepad', 'Hitam', 15.6, 16)
let laptop2 = new Laptop('Asus TUF', 'Putih', 14, 8)


// INHERITANCE
// Pewarisan Property
let productBuah = {
    nama : 'Apel',
    harga : 10000,
    stock : 10,
    satuan : 'Kg',
    rasa : 'Manis',
    jenis : 'Organik'
}

let productPakaian = {
    nama : 'Kaos Polos',
    harga : 125000,
    stock : 50,
    satuan : 'Pcs',
    warna : 'Merah',
    size : 'S'
}

let productElektronik = {
    nama : 'Laptop Lenovo Ideapad',
    harga : 16000000,
    stock : 50,
    satuan : 'Unit',
    layar : 15.6,
    garansi : 2
}


class Product{ // Parent
    constructor(nama, harga, stock, satuan){
        this.nama = nama
        this.harga = harga
        this.stock = stock
        this.satuan = satuan
    }
}


class ProductBuah extends Product{ // Child
    constructor(nama, harga, stock, satuan, rasa, jenis){
        super(nama, harga, stock, satuan)
        this.rasa = rasa
        this.jenis = jenis
    }
}

class ProductPakaian extends Product{ // Child
    constructor(nama, harga, stock, satuan, warna, size){
        super(nama, harga, stock, satuan)
        this.warna = warna
        this.size = size
    }
}

class productElektronik extends Product{ // Child
    constructor(nama, harga, stock, satuan, layar, garansi){
        super(nama, harga, stock, satuan)
        this.layar = layar
        this.garansi = garansi
    }
}