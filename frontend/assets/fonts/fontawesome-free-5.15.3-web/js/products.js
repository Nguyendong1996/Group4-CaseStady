function displayProduct() {
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
    <a href="detial.html" class="home-product-item">
        <div class="home-product-item__img" style="background-image: url('assets/img/${data[i].image}');"></div>
        <div class="home-product-item__heading">
            <h4 class="home-product-item__name">${data[i].name}</h4>
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
                    <a href="#" class="container__DMSP-name">${data[i].name}</a>
                </li>`
            }
            content +=`</ul>`
            document.getElementById("category").innerHTML = content;
        }
    })
}
