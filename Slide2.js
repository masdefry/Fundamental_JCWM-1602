
    // Mengambil id button & memberi action terhadap button tersebut
    let getButtonResult = document.getElementById('button-result')
    getButtonResult.addEventListener('click', findMultiples) // Ketika di click, menjalankan function findMultiples

    // Function findMultiples
    function findMultiples(){
        let inputUser = document.getElementsByClassName('input-user')
        
        let getAngka = Number(inputUser[0].value)
        let getLimit = Number(inputUser[1].value)

        let arrResult = []
        if(getAngka <= getLimit){
            for(let i=getAngka; i <= getLimit; i+=getAngka){
                arrResult.push(i)
            }
        }else{
            alert('Angka Harus Lebih Besar Dari Limit!')
        }

        let output = document.getElementById('output')
        output.innerHTML = `${arrResult}`

        return arrResult
    }

    let getButtonAmbil = document.getElementById('button-ambil')
    getButtonAmbil.addEventListener('click', ambilTigaPertama)

    function ambilTigaPertama(){
        let newArrResult = findMultiples() // Mengambil hasil return dari function findMultiples
        newArrResult = newArrResult.slice(0, 3)

        let output = document.getElementById('output')
        output.innerHTML = `\n ${newArrResult}`
    }