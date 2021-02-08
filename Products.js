function showDataProducts(){
    let getTable = document.getElementById('table-products')
    console.log(getTable)

    let getTbody = getTable.getElementsByTagName('tbody')[0]
    console.log(getTbody)

    let tr = ''
    for(let i=0; i < dataProducts.length; i++){
        tr += `
            <tr>
                <td>
                    <center>${i+1}</center>
                </td> 
                <td>
                    <center>${dataProducts[i].name}</center>
                </td>
                <td>
                    <center>${dataProducts[i].price}</center>
                </td>
                <td>
                    <center>${dataProducts[i].stock}</center>
                </td>
                <td>
                    <center><image src="${dataProducts[i].imageURL}" width="75"></center>
                </td>
                <td>
                    <center>
                        <input type="button" name="button-edit" value="Edit">
                        <input type="button" name="button-delete" value="Delete" onClick="deleteProduct(${i})">
                    </center>
                </td>
            </tr> 
        `
    }

    getTbody.innerHTML = tr
}

showDataProducts()

function addDataProduct(){
    let inputs = document.getElementsByClassName('input-product')
    console.log(inputs)

    let productName = inputs[0].value
    let price = inputs[1].value
    let stock = inputs[2].value
    let imageURL = inputs[3].value
    
    if(productName && price && stock && imageURL){
        dataProducts.push({
            name: productName,
            price: price,
            stock: stock,
            imageURL: imageURL
        })

        showDataProducts()

        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
        inputs[3].value = ''
    }else{
        let errorMessage = document.getElementById('error-message')
        errorMessage.innerHTML = 'Data Must Be Filled!'
    }
}

document.getElementById('button-submit').addEventListener('click', addDataProduct)

function deleteProduct(i){
    let confirmBox = confirm(`Are you sure want to delete product ${dataProducts[i].name}?`)

    if(confirmBox){
        dataProducts.splice(i, 1)
        alert('Delete Product Success!')

        showDataProducts()
    }
}