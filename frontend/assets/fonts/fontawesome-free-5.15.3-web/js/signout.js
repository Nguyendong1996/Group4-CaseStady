function logout() {
    $.ajax({
        headers: {
            "Content-Type": "application/json",
            "Accept":"*/*"
        },
        url: "http://localhost:8080/api/auth/signout",
        type: "POST",
        success: function (data) {
            window.location.href = "index.html"
            alert("Đăng xuất thành công!")
        }
    })
}