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
                        <input type="button" name="button-delete" value="Delete">
                    </center>
                </td>
            </tr> 
        `
    }

    getTbody.innerHTML = tr
}

showDataProducts()