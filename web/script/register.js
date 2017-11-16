$(function(){


    $('#register').click(function () {
        var username = $('#username').val()
        var pwd = $('#password').val()
        var rePwd = $('#repassword').val()

        if(!username || !pwd || !rePwd ){
            alert("用户名密码不能为空")
            return
        }
        if(pwd != rePwd) {
            alert('两次输入的密码不相等')
            return
        }
       
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:3000",
            data: {
                "username": username,
                "password": pwd,
                "method": "get"
            },
            dataType: "json",
            error: function (err) {
                console.log('err')
            },
            success: function (data) {
                console.log(data)
                if (data.Code == "2") {
                    alert("账号已经存在")
                } else {
                    alert("注册成功")
                    window.location.href = data.pageUrl
                }

            }
        })
    })

})