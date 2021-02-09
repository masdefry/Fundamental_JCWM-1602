function totalCarts(){
    let totalCarts = document.getElementById('your-carts')
    totalCarts.innerHTML = `Your Carts : ${usersCart.length}`

    if(usersCart.length == 0){
        let getButtonCheckout = document.getElementById('button-checkout')
        getButtonCheckout.disabled = true
    }
}

totalCarts()

function showDataCarts(){
    let getTable = document.getElementById('table-carts')
    console.log(getTable)

    let getTbody = getTable.getElementsByTagName('tbody')[0]
    console.log(getTbody)

    let tr = ''
    for(let i=0; i < usersCart.length; i++){
        tr += `
            <tr>
                <td>
                    <center>${i+1}</center>
                </td>
                <td>
                    <center>${usersCart[i].name}</center>
                </td>
                <td>
                    <center><img src="${usersCart[i].imageURL}" width="75"></center>
                </td>
                <td>
                    <center>${usersCart[i].price}</center>
                </td>
                <td>
                    <center>${usersCart[i].quantity}</center>
                </td>
                <td>
                    <center>${usersCart[i].total}</center>
                </td>
                <td>
                    <center><input type="button" name="button-delete" value="Delete Item" onClick="deleteItem(${i})"></center>
                </td>
            </tr>
        `
    }

    getTbody.innerHTML = tr
}

showDataCarts()

function addToCart(index){
    let quantityProduct = prompt('Input Quantity Item :')

    usersCart.push({
        name: dataProducts[index].name,
        imageURL: dataProducts[index].imageURL,
        price: dataProducts[index].price,
        quantity: quantityProduct,
        total: dataProducts[index].price * quantityProduct
    })

    totalCarts()
    showDataCarts()

    let getButtonCheckout = document.getElementById('button-checkout')
    getButtonCheckout.disabled = false
}

function deleteItem(index){
    let confirmBox = confirm(`Are you sure want to delete this item from carts?`)

    if(confirmBox == true){
        usersCart.splice(index, 1)

        alert('Delete Item Success!')

        totalCarts()
        showDataCarts()
    }
}

let getButtonCheckout = document.getElementById('button-checkout')
getButtonCheckout.addEventListener('click', payment)

function payment(){
    let grandTotal = 0
    for(let i=0; i < usersCart.length; i++){
        grandTotal += usersCart[i].total
    }

    let payment = prompt(`Total Payment = Rp.${grandTotal}`)

    let getStruckTable = document.getElementById('table-struck')

    let tr = ''
    for(let i=0; i < usersCart.length; i++){
        tr += `
            <tr>
                <td>
                    ${i+1}.
                </td>
                <td>
                    ${usersCart[i].name}
                </td>
                <td>
                    <center>:</center>
                </td>
                <td>
                    ${usersCart[i].price}
                </td>
                <td>
                    <center>x</center>
                </td>
                <td>
                    ${usersCart[i].quantity}
                </td>
                <td>
                    <center>=</center>
                </td>
                <td>
                    ${usersCart[i].total}
                </td>
            </tr>
        `
    }

    tr += `
        <tr>
            <td colspan="3">
                <b>TOTAL PAYMENT :</b>
            </td>
            <td>
                <center>${grandTotal}</center>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                <b>PAID :</b>
            </td>
            <td>
                <center>${payment}</center>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                <b>CHANGE :</b>
            </td>
            <td>
                <center>${payment - grandTotal}</center>
            </td>
        </tr>
    `

    getStruckTable.innerHTML = tr
}