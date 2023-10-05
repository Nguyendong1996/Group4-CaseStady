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
            "      <th>Giá </th>\n" +
            "      <th>Loại sản phẩm </th>\n" +
            "      <th>Nhà cung cấp </th>\n" +
            "      <th>Ảnh minh họa </th>\n" +
            "      <th colspan='2'></th>\n" +
            "    </tr>";
        for (let i = 0; i < data.length; i++) {
            content += `<tr>
                        <td>${i+1}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].description}</td>
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

function create(){
    window.location.href = "create.html";
}

function updateProduct(id){
    window.location.href = "update.html";
}
function deleteProduct(id){
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
