// PALINDROME
// Ex. Malam ---> Malam
//     Katak ---> Katak

function palindrome(kata){
    // Step 1. Saya pecah string kata menjad array
    let kataToArr = kata.split('')
    console.log(kataToArr)

    // Step 2. Kata yg sudah menjadi bentuk array, saya reverse
    let reverseKataArr = kataToArr.reverse()
    console.log(reverseKataArr)

    // Step 3. Saya rubah lagi array kata yg udah di reverse, menjadi string
    let kataPalindrome = reverseKataArr.join('')

    let output
    if(kata.toLowerCase() == kataPalindrome.toLowerCase()){ // Malam == malaM
        output = true
    }else{
        output = false
    }

    console.log(output)
}

palindrome('Malam')
palindrome('saya')
palindrome('kataK') // Katak == kataK