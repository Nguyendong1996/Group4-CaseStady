function listCart() {
    $.ajax({
        url: "http://localhost:8080/api/cartDetails",
        type: "GET",
        success: function (data) {
            let totalMoney = 0;
            let total;
            let content = `<table id="cart" class="table table-hover table-condensed">
        <thead>
        <tr>
            <th style="width:50%">Tên sản phẩm</th>
            <th style="width:10%">Giá</th>
            <th style="width:8%">Số lượng</th>
            <th style="width:22%" class="text-center">Thành tiền</th>
            <th style="width:10%"></th>
        </tr>
        </thead>
        <tbody>`
            for (let i = 0; i < data.length; i++) {
                total = data[i].product.price * data[i].quantity
                totalMoney += total;
                content += `<form action=""> <tr>
            <td data-th="Product">
                <div class="row">
                    <div class="col-sm-2 hidden-xs"><img
                            src="assets/img/${data[i].product.image}"
                            alt="Sản phẩm 1" class="img-responsive" width="100">
                    </div>
                    <div class="col-sm-10">
                        <h4 class="nomargin">${data[i].product.name}</h4>
                        <p>${data[i].product.description}</p>
                    </div>
                </div>
            </td>
            <td data-th="Price">${data[i].product.price} đ</td>
            <td data-th="Quantity"><input class="form-control text-center" value="${data[i].quantity}" type="number" id="quantity${i}" min="0">
            </td>
            <td data-th="Subtotal" class="text-center">${total}</td>
            <td class="actions" data-th="">
                <button class="btn btn-info btn-sm" onclick="updateCart(${i},${data[i].id},${data[i].product.id})">Sửa
                </button>
            </td>
        </tr> 
    
        </form>
`
            }
            content += `</tbody>
        <tfoot>
        <tr>
            <td><a href="index.html" class="btn btn-warning"><i class="fa fa-angle-left"></i> Tiếp tục mua
                hàng</a>
            </td>
            <td colspan="2" class="hidden-xs"></td>
            <td class="hidden-xs text-center" id="totalMoney" value="${totalMoney}"><strong>Tổng tiền : ${totalMoney} đ</strong>
            </td>
            <td><button onclick="totalMoney()" class="btn btn-success btn-block">Thanh toán <i class="fa fa-angle-right"></i></button>
            </td>
        </tr>
        <tr>
        <td><button class="btn btn-success btn-block" onclick="lichsu()">Lịch sử mua hàng</button></td>
</tr>
        </tfoot>
    </table>`
            document.getElementById("listCart").innerHTML = content
        }
    })
}



function updateCart(i,id,idProduct) {
    let cartDetail;
    let quantity = $(`#quantity${i}`).val();
    cartDetail = {
        id: id,
        quantity: quantity,
        cart:{
            id:1
        },
        product:{
            id:idProduct
        }
    }
    if(quantity==0){
        deleteCart(id)
    }else {
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: `http://localhost:8080/api/cartDetails/${id}`,
            type: "POST",
            data: JSON.stringify(cartDetail),
            success: function () {
                alert("update successfully!")
                listCart()
            }
        })}
}
function deleteCart(id){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/api/cartDetails/${id}`,
        type: "DELETE",
        success: function () {
            listCart()
        }
    })

}
function totalMoney(){
    let totalMoney =$("#totalMoney").attr("value");
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    let day = ('0' + currentDate.getDate()).slice(-2);
    let hours = ('0' + currentDate.getHours()).slice(-2);
    let minutes = ('0' + currentDate.getMinutes()).slice(-2);
    let seconds = ('0' + currentDate.getSeconds()).slice(-2);

    let formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    let bill={
        totalPrice : totalMoney,
        localDateTime:currentDate,
        cart:{
            id:1
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/api/bills`,
        type: "POST",
        data: JSON.stringify(bill),
        success: function (data) {
            let idBill = data
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: "http://localhost:8080/api/cartDetails",
                type: "GET",
                success: function (data) {
                    for (let i = 0;i<data.length;i++){
                        let billDetail ={
                            product: {
                                id:data[i].product.id
                            },
                            quantity:data[i].quantity,
                            billPrice:data[i].product.price,
                            bill:{
                                id: idBill,
                            }

                        }
                        $.ajax({
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            url: `http://localhost:8080/api/billDetails`,
                            type: "POST",
                            data: JSON.stringify(billDetail),
                            success: function () {
                            }
                        })
                        $.ajax({
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            url: `http://localhost:8080/api/cartDetails/${data[i].id}`,
                            type: "DELETE",
                            success: function () {
                            }
                        })

                    }
                    listCart()
                }

            })
            alert("thanh toan thanh cong")
        }
    })

}
function lichsu(){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/api/bills`,
        type: "GET",
        success: function (data) {
            let content =`<table>
<tr>
<th>idBil</th>
<th>Thoi gian mua hang</th>
<th>tong tien</th>
</tr>`
            for (let i=0;i<data.length;i++){
                content +=`<tr>
<td>data[i].id</td>
<td>data[i].localDateTime</td>
<td>data[i].totalPrice</td> 
</tr>`
            }
            content +=`</table>`
            document.getElementById("listBill").innerHTML = content;
        }

})
}