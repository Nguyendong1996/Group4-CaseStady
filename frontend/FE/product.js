
$.ajax({
    type: "GET",
    headers: {
        'Accept': 'application/json',
    },
    url: "http://localhost:8080/api/product",
    success: function (data) {
        let content = "<table style=\"width: auto\">\n" +
            "    <tr>\n" +
            "      <th>Stt</th>\n" +
            "      <th>Tên sản phẩm </th>\n" +
            "      <th>Miêu tả </th>\n" +
            "      <th>Số lượng </th>\n" +
            "      <th>Giá </th>\n" +
            "      <th>Loại sản phẩm </th>\n" +
            "      <th>Nhà cung cấp </th>\n" +
            "      <th>Ảnh minh họa </th>\n" +
            "      <th colspan='2'></th>\n" +
            "    </tr>";
        for (let i = 0; i < data.length; i++) {
            content += `<tr>
                        <td>${i + 1}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].description}</td>
                        <td>${data[i].quantity}</td>
                        <td>${data[i].price}</td>
                        <td>${data[i].category.name}</td>
                        <td>${data[i].provider.name}</td>
                        <td><img style="width: 50px; height: 50px" src="/src/main/resources/static/image/${data[i].image}"></td>
                        <td><button onclick="updateProduct(${data[i].id})"> update</button></td>
                        <td><button onclick="deleteProduct(${data[i].id})"> delete</button></td>
                    </tr>`
        }
        document.getElementById("display").innerHTML = content;
    },
    error: function (err) {
        console.log(err)
        // lỗi
    }
});

function create() {
    window.location.href = "create.html";
}

function Goback() {
    window.location.href = "product.html";
}

function createPost() {
    let name = $('#name').val();
    let description = $('#description').val();
    let quantity = $('#quantity').val();
    let price = $('#price').val();
    let status = $('#status').val();
    let category_id = $('#category_id').val();
    let provider_id = $('#provider_id').val();
    let file = $('#file')[0].files[0];
    let product = {
        name: name,
        description: description,
        quantity: quantity,
        price: price,
        status: status,
        category: {
            id: category_id
        },
        provider: {
            id: provider_id
        }
    }
    let formData = new FormData()
    formData.append("product", new Blob([JSON.stringify(product)], {type: "application/json"}))
    formData.append("file", file)
    $.ajax({
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        url: "http://localhost:8080/api/product/create",
        success: function () {
            alert("Creating a new product successful!")
        }
    })
    event.preventDefault();
}


function updateProduct(id){
    $.ajax({
        type: "GET",
        //tên API
        url: `http://localhost:8080/api/product/${id}`,
        success: function (data) {
            let modul4_productModel = JSON.stringify(data)
            localStorage.setItem("modul4_productModel", modul4_productModel);
            window.location.href = "update.html";
        }
    });
    event.preventDefault()
}
function updatePort(){
    let name = $('#nameU').val();
    let description = $('#descriptionU').val();
    let quantity = $('#quantityU').val();
    let price = $('#priceU').val();
    let status = $('#status').val();
    let category_id = $('#category_idU').val();
    let provider_id = $('#provider_idU').val();
    let file = $('#file')[0].files[0];
    let product = {
        name: name,
        description: description,
        quantity: quantity,
        price: price,
        status: status,
        category: {
            id: category_id
        },
        provider: {
            id: provider_id
        }
    }
    let data = localStorage.getItem("modul4_productModel");
    let product1 = JSON.parse(data);
    let id = product1.id;

    let formData = new FormData()
    formData.append("product", new Blob([JSON.stringify(product)], {type: "application/json"}))
    formData.append("file", file)
    $.ajax({
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        url: `http://localhost:8080/api/product/update/${id}`,
        success: function () {
            alert("Update a new product successful!")
        }
    })
    event.preventDefault();
}

function loadUpdateForm(){
    let data = localStorage.getItem("modul4_productModel");
    let product = JSON.parse(data);
    document.getElementById("nameU").value=product.name;
    document.getElementById("descriptionU").value=product.description;
    document.getElementById("quantityU").value=product.quantity;
    document.getElementById("priceU").value=product.price;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/category",
        success: function (data) {
            console.log(data);
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += `<option value=${data[i].id}>${data[i].name}</option>`
            }
            document.getElementById("category_idU").innerHTML = content;
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/provider",
        success: function (data) {
            console.log(data);
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += `<option value=${data[i].id}>${data[i].name}</option>`
            }
            document.getElementById("provider_idU").innerHTML = content;
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    });
}


function deleteProduct(id) {
    $.ajax({
        type: "DELETE",
        //tên API
        url: `http://localhost:8080/api/product/${id}`,
        success: function () {
            alert("ok");
            window.location.href = "product.html";
        }
    });
}


$.ajax({
    type: "GET",
    url: "http://localhost:8080/api/category",
    success: function (data) {
        console.log(data);
        let content = "";
        for (let i = 0; i < data.length; i++) {
            content += `<option value=${data[i].id}>${data[i].name}</option>`
        }
        document.getElementById("category_id").innerHTML = content;
        document.getElementById("category_idU").innerHTML = content;

    },
    error: function (err) {
        console.log(err)
        // lỗi
    }
});

$.ajax({
    type: "GET",
    url: "http://localhost:8080/api/provider",
    success: function (data) {
        console.log(data);
        let content = "";
        for (let i = 0; i < data.length; i++) {
            content += `<option value=${data[i].id}>${data[i].name}</option>`
        }
        document.getElementById("provider_id").innerHTML = content;
        document.getElementById("provider_idU").innerHTML = content;
    },
    error: function (err) {
        console.log(err)
        // lỗi
    }
});