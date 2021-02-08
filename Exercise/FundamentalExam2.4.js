function alphabetPosition(text){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''

    for(let i=0; i < text.length; i++){
        for(let j=0; j < alphabets.length; j++){
            if(text[i].toLowerCase() == alphabets[j]){
                result += `${j+1} `
            }
        }
    }

    console.log(result)
}

alphabetPosition('Have you done your homework?')