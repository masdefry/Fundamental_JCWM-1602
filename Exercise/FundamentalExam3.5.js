// COUNT WORDS
// Ex. Jangan Jangan Kamu Adalah Aku
//          - Jangan : 2
//          - Kamu : 1
//          - Adalah : 1
//          - Aku : 1

function countWords(sentence){
    let arrSentence = sentence.split(' ')
    let output = ''

    let obj = {}
    for(let i=0; i < arrSentence.length; i++){
        if(Object.keys(obj).includes(arrSentence[i])){
            obj[arrSentence[i]]++
        }else{
            obj[arrSentence[i]] = 1
        }
    }

    for(let props in obj){
        output += `Jumlah Kata ${props}, Ada Sebanyak ${obj[props]} \n`
    }

    console.log(obj)
    console.log(output)
}

countWords('Jangan Jangan Kamu Adalah Aku')



// FIND PAIRS
// Ex. [Merah, Biru, Merah, Kuning, Hijau]
function findPairs(arrColor){
    let output = ''

    let obj = {}
    for(let i=0; i < arrColor.length; i++){
        if(Object.keys(obj).includes(arrColor[i])){
            obj[arrColor[i]]++
        }else{
            obj[arrColor[i]] = 1
        }
    }

    for(let props in obj){
        if(obj[props] % 2 == 0){
            output += `Kata ${props} Berpasangan`
        }
    }

    console.log(output)
}

findPairs(['Merah', 'Biru', 'Merah', 'Kuning', 'Hijau'])