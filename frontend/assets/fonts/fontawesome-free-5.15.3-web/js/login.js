function login() {
    let username = $("#username").val()
    let password = $("#password").val()

    let account = {
        username: username,
        password: password
    }

    $.ajax({
        headers: {
            "Content-Type": "application/json"
        },
        url: "http://localhost:8080/api/auth/signin",
        type: "POST",
        data: JSON.stringify(account),
        success: function (data) {
            localStorage.setItem("token", data.token)
            window.location.href = "index.html"
            alert("Đăng nhập thành công!")
        }
    })
    $.ajax({
        headers: {
            "Content-Type": "application/json"
        },
        url: `http://localhost:8080/api/account/${username}`,
        type: "POST",
        success: function (data) {
            localStorage.setItem("accountId", data.id)
            document.getElementById("username_display").innerText = `${username}`;
        }
    })
}