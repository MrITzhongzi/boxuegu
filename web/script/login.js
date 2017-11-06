$(function () {

    $('#login').click(function () {
        var username = $('#username').val()
        var pwd = $('#password').val()

        if(username == '' || pwd == ''){  
            alert('用户名或密码不能为空')
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

                if (changeAccountExist(data, username, pwd)) {
                    alert("登录成功")
                } else {
                    alert("账号不存在")
                }

            }
        })
    })

    $('.register').click(function(){
        
    })

    function changeAccountExist(arr, username, pwd) {
        var flag = false
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].username == username && arr[i].password == pwd) {
                flag = true
            }
        }
        return flag
    }

})