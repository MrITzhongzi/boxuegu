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
                console.log(data)
                if (changeAccountExist(data.data, username, pwd)) {
                    window.location.href = data.pageUrl
                } else {
                    alert("账号不存在")
                }

            }
        })
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