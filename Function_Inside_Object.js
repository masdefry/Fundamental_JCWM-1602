// FUNCTION INSIDE OBJECT
// This Keywords ---> Memungkinkan suatu property untuk mengakses property lain didalam object yg sama
// Ex. Simpanlah data user kedalam bentuk object dengan data sebagai berikut :
//          - Nama : Defry
//          - Username : defry20
//          - Tahun Lahir : 1990
let user = {
    nama : 'Defryan',
    username : 'defry20',
    tahunLahir : 1990,
    umur : function(){
        let year = new Date().getFullYear()
        let umur = year - this.tahunLahir

        return umur
    }
}
console.log(user)
console.log(user.umur())

let product = {
    nama : 'Apel',
    stock : 10,
    harga : 10000,
    updateStock : function(newStock){
        this.stock = newStock
    }
}
product.updateStock(30)
console.log(product)