$.ajax({
        type: "GET",
        url: "http://localhost:8080/api/provider",
        success: function (data) {
            console.log(data);
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += `<option value=${data[i]}>${data[i].name}</option>`
            }
            document.getElementById("P_id").innerHTML = content;
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    });

$.ajax({
        type: "GET",
        url: "http://localhost:8080/api/category",
        success: function (data) {
            console.log(data);
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += `<option value=${data[i]}>${data[i].name}</option>`
            }
            document.getElementById("C_id").innerHTML = content;
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
});

function search() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let category = document.getElementById("C_id").value;
    let provider = document.getElementById("P_id").value;
    let name = document.getElementById("name").value;
    let search = {
        number1: number1,
        number2: number2,
        category:category,
        provider:provider,
        name: name
    }

    let formData = new FormData()
    formData.append("search", new Blob([JSON.stringify(search)], {type: "application/json"}))
    $.ajax({
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        url: `http://localhost:8080/api/search`,
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
    })
}