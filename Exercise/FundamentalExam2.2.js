// PERSISTANCE
// Ex. 39 : 3x9 = 27 ---> 2x7 = 14 ---> 1x4 = 4 : return 3
// Ex. 999 : 9x9x9 = 729 ---> 7x2x9 ---> 126

function persistance(n){
    // CARA #1
    // let strN = n.toString()
    // let temporaryN = 0

    // let totalKali = 0

    // do{
    //     for(let i=0; i < strN.length; i++){     // '39' : 
    //         if(i == 0){                         //         - i=0 ---> 3, temporaryN = 3
    //             temporaryN = strN[i]            //         - i=1 ---> 9, temporaryN = 3*9 = 27, strN = '27'; totalKali = 1
    //         }else if(i == strN.length-1){       // '27' :  
    //             temporaryN *= strN[i]           //         - i=0 ---> 2, temporaryN = 2
    //             strN = temporaryN.toString()    //         - i=1 ---> 7, temporaryN = 2*7 = 14, strN = '14'; totalKali = 2
    //             totalKali++
    //         }else{                              // '14' :
    //             temporaryN *= strN[i]           //         - i=0 ---> 1, temporaryN = 1
    //                                             //         - i=1 ---> 4, temporaryN = 1*4 = 4, strN = '4'; totalKali = 3
    //         }
    //     }        
    // }while(strN.length != 1)

    // console.log(totalKali)

    // CARA #2
    let strN = n.toString() // '39' ---> '27' ---> '14' ---> 4

    let totalKali = 0 // 1; 1; 1;

    while(strN.length != 1){
        let temporaryResult = strN[0] // 3 ---> 2 ---> 1

        for(let i=1; i < strN.length; i++){
            temporaryResult *= strN[i] // 3*9 = 27; // 2*7 = 14 // 1*4 = 4
        }

        strN = temporaryResult.toString()
        totalKali++
    }

    console.log(totalKali)
}

persistance(39)
persistance(999)