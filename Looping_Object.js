// LOOPING OBJECT
let dataUser = [
    {username : 'ryandefryan', password : 12345},
    {username : 'ibnusina', password : 'abcdef'},
    {username : 'gatra', password : 54321}
]

dataUser.push({username : 'fandiario', password : 12345})

// READ
console.log(dataUser[2]) // {username : 'gatra', password : 54321}
console.log(dataUser[2].password)

for(let i = 0; i < dataUser.length; i++){
    console.log(`${i+1}. ${dataUser[i].username} Memilik Password ${dataUser[i].password}`)
}


// UPDATE
dataUser[2].username = 'gatra.gatra'
console.log(dataUser)

// DELETE
dataUser.splice(0, 1) // Menghapus data di index ke-0
console.log(dataUser)