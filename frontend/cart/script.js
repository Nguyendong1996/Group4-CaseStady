const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

function cartDetail() {
    let idCartDetail = localStorage.getItem("idCartDetail")
    console.log("--start call----")
    $.ajax({
        url: `http://localhost:8080/api/product/${idCartDetail}`,
        type: "GET",
        success: function (data) {
            let partData = data
            console.log(partData)
            console.log(partData.image)
            let img =`<img src = "../../${partData.image}" alt = "shoe image">
<img src = "/frontend/assets/img/${partData.image}" alt = "shoe image">
<img src = "/frontend/assets/img/${partData.image}" alt = "shoe image">
<img src = "/frontend/assets/img/${partData.image}" alt = "shoe image">`
            document.getElementById("img").innerHTML = img;
            let content=`<h2 class = "product-title">${partData.name}</h2>
      <div class = "product-rating">
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star-half-alt"></i>
        <span>4.8(21)</span>
      </div>

      <div class = "product-price">
        <p class = "new-price">Giá bán: <span>${partData.price} USD</span></p>
      </div>

      <div class = "product-detail">
        <ul>
          <li>Miêu tả: <span>${partData.description}</span></li>
          <li>Cửa hàng: <span>${partData.provider.name}</span></li>
          
        </ul>
      </div>

      <div class = "purchase-info">
        <input type = "number" min = "0" value = "1" id="quantity">
        <button type = "button" class = "btn" onclick="addToCart(${partData.id})">
          Thêm vào giỏ hàng <i class = "fas fa-shopping-cart"></i>
        </button>
        <button type = "button" class = "btn" onclick="homePage()">Mua thêm</button>
     

      
      </div>`
            document.getElementById("content").innerHTML=content
        }

    })

    console.log("--end call--")

}
function addToCart(idProduct) {
    let quantity =  $(`#quantity`).val();
    let cartDetail
    cartDetail = {
        product: {
            id: idProduct
        },
        cart: {
            id: 1
        },
        quantity: quantity
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
                    let quantity1 =parseInt(arr2[i].quantity) + parseInt(quantity)
                    cartDetail1 = {
                        id: arr2[i].id,
                        product: {
                            id: arr2[i].product.id,
                        },
                        cart: {
                            id: 1
                        },
                        quantity: quantity1,
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
function homePage(){
    window.location.href="../index.html"
}