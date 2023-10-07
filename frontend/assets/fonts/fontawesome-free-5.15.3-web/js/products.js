function displayProduct() {
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

    $.ajax({
        url: "http://localhost:8080/api/product",
        type: "GET",
        success: function (data) {
            let content =`<div>`
                content+=
                ` <div class="grid">
                            <div class="grid__row">`
            for (let i = 0; i < data.length; i++) {
                content += `
<div class="grid-column-2">
    <button onclick="cartDetail(${data[i].id})" class="home-product-item">
        <div class="home-product-item__img" style="background-image: url('assets/img/${data[i].image}');"></div>
        <div class="home-product-item__heading">
            <label for="">Sản phẩm: </label><h4 class="home-product-item__name">${data[i].name}</h4><br>
             
        </div>
        <div class="home-product-item__heading">
        <label>Shop: </label><h4 class="home-product-item__name">${data[i].provider.name}</h4>
</div>
        <div class="home-product-item__price">
            <span class="home-product-item__price-current">${data[i].price}</span>
        </div>
        <div class="home-product-item__action">
                                            <span class="home-product-item__like">
                                                <i class="fas fa-heart"></i>
                                                <
                                                !-- <i class="far fa-heart--liked"></i> -->
                                            </span>
            <div class="home-product-item__rating">
                <i class="fas start-gold fa-star"></i>
                <i class="fas start-gold fa-star"></i>
                <i class="fas start-gold fa-star"></i>
                <i class="fas start-gold fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <div class="home-product-item__sold">
                404 đã bán
            </div>
        </div>
        <div class="home-product-item__origin">
           
            <span class="home-product-item__origin-name">${data[i].provider.address}</span>
        </div>
        <div class="home-product-item__favourite">
            <i class="fas fa-check"></i>
            Yêu thích
        </div>
        <div class="home-product-item__sale-off">
            <span class="home-product-item__percent">20%</span>
            <span class="home-product-item__label">Giảm</span>
        </div>
    </button>
</div>`
            }
            content +=` </div>
                    </div>`
            content +=`</div>`
            document.getElementById("home-product").innerHTML = content;
        }
    })
    category()
}
function category(){
    $.ajax({
        url: "http://localhost:8080/api/category",
        type: "GET",
        success: function (data) {
        let content =`<ul class="container__DMSP-menu">`
            for (let i = 0;i<data.length;i++){
                content +=`
                <li class="container__DMSP-item">
                    <a href="#" class="container__DMSP-name" onclick="showListProductByCategory(${data[i].id})" id="${data[i].id}">${data[i].name}</a>
                </li>`
            }
            content +=`</ul>`
            document.getElementById("category").innerHTML = content;
        }
    })
}
function cartDetail(idProduct){
    localStorage.setItem("idCartDetail",idProduct)
    window.location.href="cart/cart.html"
}
function showListProductByCategory(id){
    let search={
        category:{
            id:id
        }
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
            let notFound = `<div><H1>Không tìm thấy!!!</H1></div>`
            if(data.size!==0){
                let content = showData(data);
                document.getElementById("home-product").innerHTML = content;
            } else {
                document.getElementById("notFound").innerHTML=notFound;
            }
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    })
}
function findByName(){
    document.getElementById("home-product").innerHTML = "";
    let findByName = document.getElementById("findName").value;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        async: false,
        data: JSON.stringify(findByName),
        url: "http://localhost:8080/api/search/searchByName",
        success: function (data) {
            let notFound = `<div><H1>Không tìm thấy!!!</H1></div>`
            if(data.size!==0){
            let content = showData(data);
            document.getElementById("home-product").innerHTML = content;
            } else {
                document.getElementById("notFound").innerHTML=notFound;
            }
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    })
    // document.getElementById("findName").value="";
}
function showData(data) {
    let content =`<div>`
    content+=
        ` <div class="grid">
                            <div class="grid__row">`
    for (let i = 0; i < data.length; i++) {
        content += `
<div class="grid-column-2">
    <a href="detial.html" class="home-product-item">
        <div class="home-product-item__img" style="background-image: url('/frontend/assets/img/${data[i].image}');"></div>
         <div class="home-product-item__heading">
            <label for="">Sản phẩm: </label><h4 class="home-product-item__name">${data[i].name}</h4><br>
             
        </div>
        <div class="home-product-item__heading">
        <label>Shop: </label><h4 class="home-product-item__name">${data[i].provider.name}</h4>
</div>
        <div class="home-product-item__price">
            <span class="home-product-item__price-current">${data[i].price}</span>
        </div>
        <div class="home-product-item__action">
                                            <span class="home-product-item__like">
                                                <i class="fas fa-heart"></i>
                                                <
                                                !-- <i class="far fa-heart--liked"></i> -->
                                            </span>
            <div class="home-product-item__rating">
                <i class="fas start-gold fa-star"></i>
                <i class="fas start-gold fa-star"></i>
                <i class="fas start-gold fa-star"></i>
                <i class="fas start-gold fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <div class="home-product-item__sold">
                404 đã bán
            </div>
        </div>
        <div class="home-product-item__origin">
            <span class="home-product-item__brand">Kingston</span>
            <span class="home-product-item__origin-name">${data[i].provider.address}</span>
        </div>
        <div class="home-product-item__favourite">
            <i class="fas fa-check"></i>
            Yêu thích
        </div>
        <div class="home-product-item__sale-off">
            <span class="home-product-item__percent">20%</span>
            <span class="home-product-item__label">Giảm</span>
        </div>
    </a>
</div>`
    }
    return content;
}

function search() {
    document.getElementById("home-product").innerHTML = "";
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
            async: false,
            url: "http://localhost:8080/api/search",
            success: function (data) {
                let content = showData(data);
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
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
                document.getElementById("home-product").innerHTML = content;
            },
            error: function (err) {
                console.log(err)
                // lỗi
            }
        })
    } else{
        let notfound =`<div><h1>Không tìm thấy, vui lòng chọn đúng!!!</h1> </div>`
        document.getElementById("home-product").innerHTML = notfound;
    }
}
