let arr1;
function listCart(){
    $.ajax({
        url: "http://localhost:8080/api/cartDetails",
        type: "GET",
        success: function (data) {
            let total;
            arr1 = data
            let content = `<table class="table table-striped"><tr>
                        <th>EmployeeCode</th>
                        <th>NameProduct</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th colspan="2">Action</th>
                        </tr>`
            for (let i = 0; i < arr1.length; i++) {
                total += data[i].product.price * data[i].quantity;
                content += `<tr>
                        <td>${i + 1}</td>
                        <td>${arr1[i].product.name}</td>
                        <td>${arr1[i].product.price}</td>
                        <td>${arr1[i].quantity}</td>
                        <td><button onclick="delete(${arr1[i].id})" class="btn btn-danger">delete</button></td>
                        </tr>`
            }
            content += `</table>`
            document.getElementById("listCart").innerHTML = content
            document.getElementById("total").innerHTML = "total : " + total;
        }
    })
}

$.ajax({
    url: "http://localhost:8080/api/cartDetails",
    type: "GET",
    success: function (data) {
        for (let i = 0;i <data.length;i++ ){
            total += data[i].price * data[i].quantity
        }
    }
})
