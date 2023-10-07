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
            <td class="hidden-xs text-center"><strong>Tổng tiền : ${totalMoney} đ</strong>
            </td>
            <td><button onclick="thanhtoan()" class="btn btn-success btn-block">Thanh toán <i class="fa fa-angle-right"></i></button>
            </td>
        </tr>
        </tfoot>
    </table>`
            document.getElementById("listCart").innerHTML = content
        }
    })
}

function thanhtoan() {
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