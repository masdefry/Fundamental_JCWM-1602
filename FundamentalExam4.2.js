// SUIT INDONESIA
//      - Gajah
//      - Orang
//      - Semut

function suitIndonesia(player1, player2){
    if(player1 == player2){
        return 'Seri'
    }else if(player1 == 'Gajah' && player2 == 'Orang' || player1 == 'Orang' && player2 == 'Gajah'){
        return 'Gajah Menang'
    }else if(player1 == 'Gajah' && player2 == 'Semut' || player1 == 'Semut' && player2 == 'Gajah'){
        return 'Semut Menang'
    }else if(player1 == 'Orang' && player2 == 'Semut' || player1 == 'Semut' && player2 == 'Orang'){
        return 'Orang Menang'
    }
}

console.log(suitIndonesia('Gajah', 'Semut'))
console.log(suitIndonesia('Semut', 'Gajah'))
