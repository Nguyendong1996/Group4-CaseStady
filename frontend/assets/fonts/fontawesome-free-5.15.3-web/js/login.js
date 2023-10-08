function login() {
    let username = $("#username").val()
    let password = $("#password").val()

    let account = {
        username: username,
        password: password
    }

    $.ajax({
        headers: {
            "Content-Type": "application/json",
            "Accept":"*/*"
        },
        url: "http://localhost:8080/api/auth/signin",
        type: "POST",
        data: JSON.stringify(account),
        success: function (data) {
            // Sử dụng thư viện js-cookie để đặt giá trị cookie
            Cookies.set("bezkoderalsdjlaksdlkajsd", data.jwt);
            window.location.href = "index.html"
            alert("Đăng nhập thành công!")
        }
    })
}