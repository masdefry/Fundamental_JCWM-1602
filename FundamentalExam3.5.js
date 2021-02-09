function countWords(str){
    let arrStr = str.split(' ')
    console.log(arrStr)

    let arrResult = [] 
    // [{kata: Jangan, total: 1}]

    for(let i=0; i < arrStr.length; i++){
        if(i == 0){
            arrResult.push({kata: arrStr[i], total: 1})
        }else{
            
            let arrStrAda = false
            let index = 0
            for(let j=0; j < arrResult.length; j++){
                if(arrResult[j].kata == arrStr[i]){
                    arrStrAda = true
                    index = j
                }
            }

            if(arrStrAda == true){
                arrResult[index].total++
            }else{
                arrResult.push({kata: arrStr[i], total: 1})
            }
        }
    }
    console.log(arrResult)


    // let arrStr = str.split(' ')

    // let arrKata = []
    // let arrTotal = []

    // for(let i=0; i < arrStr.length; i++){
    //     if(i == 0){
    //         arrKata.push(arrStr[i])
    //         arrTotal.push(1)
    //     }else{
    //         if(arrKata.includes(arrStr[i]) == true){
    //             for(let j=0; j < arrKata.length; j++){
    //                 if(arrKata[j] == arrStr[i]){
    //                     arrTotal[j]++
    //                 }
    //             }
    //         }else{
    //             arrKata.push(arrStr[i])
    //             arrTotal.push(1)
    //         }
    //     }
    // }

    // console.log(arrKata)
    // console.log(arrTotal)
}

countWords('Jangan Jangan Kamu Adalah Aku')