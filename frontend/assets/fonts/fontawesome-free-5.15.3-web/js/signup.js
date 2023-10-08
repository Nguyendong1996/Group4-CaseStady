function register(){
    let username = $("#username_register").val()
    let password = $("#password_register").val()
    let passworfConfirm = $("#password_confirm_register").val()
    let name = $("#name_register").val()
    let address = $("#address").val()
    let numberphone =$("#numberPhone").val()
    let email = $("#email").val()

    let account = {
        username: username,
        password: password,
        name : name,
        address : address,
        phoneNumber : numberphone,
        email : email
    }


    if(username === null || password === null || name === null || address === null || numberphone === null || email === null){
        if(password === passworfConfirm){
            $.ajax({
                headers: {
                    "Content-Type": "application/json"
                },
                url: "http://localhost:8080/api/auth/signup",
                type: "POST",
                data: JSON.stringify(account),
                success: function (data) {
                    //localStorage.setItem("token", data.token)
                    window.location.href = "index.html"
                }
            })
        }else{
            alert("Xác nhận mật khẩu chưa đúng");
        }
    }else{
        alert("Yêu cầu nhập đủ các trường")
    }



}