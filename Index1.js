function waves(str){
    let output = ''

    for(let i=0; i < str.length; i++){
        let replaceStr = str.replace(str[i], str[i].toUpperCase())
        output += `${replaceStr} \n`
    }

    console.log(output)
}

waves('ryan')