$.ajax({
    type: "GET",
    url: "http://localhost:8080/api/provider",
    success: function (data) {
        console.log(data);
        let content = "";
        for (let i = 0; i < data.length; i++) {
            content += `<option></option><br><option value=${data[i].id}>${data[i].name}</option>`
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
            content += `<option></option><br><option value=${data[i].id}>${data[i].name}</option>`
        }
        document.getElementById("C_id").innerHTML = content;
    },
    error: function (err) {
        console.log(err)
        // lỗi
    }
});
function findByName(){
    let findByName = document.getElementById("findName").value;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(findByName),
        url: "http://localhost:8080/api/search/searchByName",
        success: function (data) {
            let content = showData(data);
            document.getElementById("display").innerHTML = content;
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    })
}
function showData(data) {
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
    return content;
}

function search() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let C_id = document.getElementById("C_id").value;
    let P_id = document.getElementById("P_id").value;
    let name = document.getElementById("name").value;

    if (number1 !== "" && number2 !== "" && C_id !== "" &&  P_id !== "" && name !=="") {
        let search = {
            number1: number1,
            number2: number2,
            category:
                {
                    id: C_id
                },
            provider: {
                id: P_id
            },
            name: name
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 1: A B C
    } else if (number1 !== "" && number2 !== "" && C_id !== "" &&  P_id !== "" && name ==="") {
        let search = {
            number1: number1,
            number2: number2,
            category:
                {
                    id: C_id
                },
            provider: {
                id: P_id
            },
            name: "default"
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search1",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 2: A C D
    } else if (number1 !== "" && number2 !== "" && C_id === "" &&  P_id !== "" && name !=="") {
        let search = {
            number1: number1,
            number2: number2,
            category:
                {
                    id: 1
                },
            provider: {
                id: P_id
            },
            name: name
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search2",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 3: A B D
    } else if (number1 !== "" && number2 !== "" && C_id !== "" &&  P_id === "" && name !=="") {
        let search = {
            number1: number1,
            number2: number2,
            category:
                {
                    id: C_id
                },
            provider: {
                id: 1
            },
            name: name
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search3",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 4: BCD
    } else if (number1 === "" && number2 === "" && C_id !== "" &&  P_id !== "" && name !=="") {
        let search = {
            number1: 0,
            number2: 0,
            category:
                {
                    id: C_id
                },
            provider: {
                id: P_id
            },
            name: name
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search4",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 5: AB
    } else if (number1 !== "" && number2 !== "" && C_id !== "" &&  P_id === "" && name ==="") {
        let search = {
            number1: number1,
            number2: number2,
            category:
                {
                    id: C_id
                },
            provider: {
                id: 1
            },
            name: "default"
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search5",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 6: A C
    } if (number1 !== "" && number2 !== "" && C_id === "" &&  P_id !== "" && name ==="") {
        let search = {
            number1: number1,
            number2: number2,
            category:
                {
                    id: 1
                },
            provider: {
                id: P_id
            },
            name: "Default"
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search6",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 7: A D
    } else if (number1 !== "" && number2 !== "" && C_id === "" &&  P_id === "" && name !=="") {
        let search = {
            number1: number1,
            number2: number2,
            category:
                {
                    id: 1
                },
            provider: {
                id: 1
            },
            name: name
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search7",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 8: BC
    } else if (number1 === "" && number2 === "" && C_id !== "" &&  P_id !== "" && name ==="") {
        let search = {
            number1: 0,
            number2: 0,
            category:
                {
                    id: C_id
                },
            provider: {
                id: P_id
            },
            name: "Default"
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search8",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 9: BD
    } else if (number1 === "" && number2 === "" && C_id !== "" &&  P_id === "" && name !=="") {
        let search = {
            number1: 0,
            number2: 0,
            category:
                {
                    id: C_id
                },
            provider: {
                id: 1
            },
            name: name
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search9",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 10: CD
    } else if (number1 === "" && number2 === "" && C_id === "" &&  P_id !== "" && name !=="") {
        let search = {
            number1: 0,
            number2: 0,
            category:
                {
                    id: 1
                },
            provider: {
                id: P_id
            },
            name: name
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search10",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 11: A
    } else if (number1 !== "" && number2 !== "" && C_id === "" &&  P_id === "" && name ==="") {
        let search = {
            number1: number1,
            number2: number2,
            category:
                {
                    id: 1
                },
            provider: {
                id: 1
            },
            name: "Default"
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search11",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 12: B
    } else if (number1 === "" && number2 === "" && C_id !== "" &&  P_id === "" && name ==="") {
        let search = {
            number1: 0,
            number2: 0,
            category:
                {
                    id: C_id
                },
            provider: {
                id: 1
            },
            name: "Default"
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search12",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 13: C
    } else if (number1 === "" && number2 === "" && C_id === "" &&  P_id !== "" && name ==="") {
        let search = {
            number1: 0,
            number2: 0,
            category:
                {
                    id: 0
                },
            provider: {
                id: P_id
            },
            name: "Default"
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search13",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })

        // search 14: D
    } else if (number1 === "" && number2 === "" && C_id === "" &&  P_id === "" && name !=="") {
        let search = {
            number1: 0,
            number2: 0,
            category:
                {
                    id: 1
                },
            provider: {
                id: 1
            },
            name: name
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(search),
            url: "http://localhost:8080/api/search/search14",
            success: function (data) {
                let content = showData(data);
                document.getElementById("display").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })
    } else {
        alert("Đéo tìm thấy nhé!")
    }
}
