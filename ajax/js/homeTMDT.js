let arr;
let arr2;

function display() {
    $.ajax({
        url: "http://localhost:8080/api/product",
        type: "GET",
        success: function (data) {
            arr = data
            let content = `<table class="table table-striped"><tr>
                        <th>EmployeeCode</th>
                        <th>NameProduct</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Provider</th>
                        <th colspan="2">Action</th>
                        </tr>`
            for (let i = 0; i < arr.length; i++) {
                content += `<tr>
                        <td>${i + 1}</td>
                        <td>${arr[i].name}</td>
                        <td>${arr[i].price}</td>
                        <td>${arr[i].quantity}</td>
                        <td>${arr[i].category.name}</td>
                        <td>${arr[i].provider.name}</td>
                        <td><button onclick="updateStaff(${arr[i].idStaff})" class="btn btn-warning">Update</button></td>
                        <td><button onclick="addToCart(${arr[i].id})" class="btn btn-danger">addToCart</button></td>
                        </tr>`
            }
            content += `</table>`
            document.getElementById("display").innerHTML = content
        }
    })
}

function cart() {
    window.location.href = "cart.html"
}

function addToCart(idProduct) {
    let cartDetail
    cartDetail = {
        product: {
            id: idProduct
        },
        cart: {
            id: 1
        },
        quantity: 1
    }
    let flag= false;
    let cartDetail1;
    let index;
    $.ajax({
        url: "http://localhost:8080/api/cartDetails",
        type: "GET",
        success: function (data) {
            arr2 = data
            for (let i = 0;i<arr2.length; i++) {

                if (arr2[i].product.id === idProduct) {
                    cartDetail1 = {
                        id: arr2[i].id,
                        product: {
                            id: arr2[i].product.id,
                        },
                        cart: {
                            id: 1
                        },
                        quantity: arr2[i].quantity + 1,
                    }
                    flag = true;
                    index = i;
                }
            }
            if (flag===true){
                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: `http://localhost:8080/api/cartDetails/${arr2[index].id}`,
                    type: "POST",
                    data: JSON.stringify(cartDetail1),
                    success: function () {
                        alert("AddToCart successfully!")
                    }
                })
            }else {
                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: "http://localhost:8080/api/cartDetails",
                    type: "POST",
                    data : JSON.stringify(cartDetail),
                    success: function () {
                        alert("addToCart successfully!")
                    }})
            }
        }
    })

}

