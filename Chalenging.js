// HASHTAG
// Ex. hello world! ---> #HelloWorld!
//      saya mau makan ---> #SayaMauMakan

function hashtag(str){
    // CARA 1
    // let output = '#'

    // for(let i=0; i < str.length; i++){
    //     if(i == 0){
    //         output += str[i].toUpperCase()
    //     }else if(str[i-1] == ' '){ // str[6-1] == ' '?
    //         output += str[i].toUpperCase()
    //     }else{
    //         output += str[i]
    //     }
    // }

    // output = output.replace(/ /g, '')

    // console.log(output)

    // CARA 2
    let arrStr = str.split(' ') // [hello, world!]
    let output = '#'

    for(let i=0; i < arrStr.length; i++){
        let textArrStr = arrStr[i] // 'hello'; 'world!'

        for(let j=0; j < textArrStr.length; j++){ // Hello; World!
            if(j == 0){
                output += textArrStr[j].toUpperCase()
            }else{
                output += textArrStr[j]
            }
        }
    }

    console.log(output)
}

hashtag('hello world!')
hashtag('saya mau makan')