// ALPHABETS WAR

function alphabetsWar(str1, str2){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let resultStr1 = 0
    let resultStr2 = 0

    for(let i=0; i < str1.length; i++){
        resultStr1 += alphabets.indexOf(str1[i]) + 1
    }

    for(let i=0; i < str2.length; i++){
        resultStr2 += alphabets.indexOf(str2[i]) + 1
    }

    if(resultStr1 == resultStr2){
        console.log('Draw')
    }else if(resultStr1 > resultStr2){
        console.log(`${str1} Win The War`)
    }else if(resultStr2 > resultStr1){
        console.log(`${str2} Win The War`)
    }
}

alphabetsWar('abc', 'ccc') // 1 + 2 + 3 = 6; 3 + 3 + 3 = 9; ccc WIN
alphabetsWar('pqr', 'xyz')