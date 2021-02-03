// Kalian bikin function untuk menghitung jumlah huruf vokal yg ada di dalam suatu kalimat
// Ex. Saya mau makan ---> 6
//     Abracadabra    ---> 5

function countVowels(str){
    let vowels = 'aiueo'
    let totalVowels = 0

    for(let i = 0; i < str.length; i++){
        // if(str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o'){
        //     totalVowels++
        // }

        if(vowels.includes(str[i]) == true){
            totalVowels++
        }
    }

    return totalVowels
}

console.log(countVowels('Saya mau makan'))