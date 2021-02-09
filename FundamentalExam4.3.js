// ALPHA FORWARD

function alphaForward(str, num){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let newStr = ''

    for(let i=0; i < str.length; i++){
        let position = alphabets.indexOf(str[i])
        position += num
        
        if(position >= alphabets.length){
            newStr += alphabets[position - alphabets.length]
        }else{
            newStr += alphabets[position] // z; a; b;
        }
    }

    console.log(newStr)
}

alphaForward('abc', 2) // a -> c; b -> d; c -> e
// alphaForward('pqr', 1) // p -> q; q -> r; r -> s
alphaForward('xyz', 2) // x -> z; y -> undefined; z -> undefined