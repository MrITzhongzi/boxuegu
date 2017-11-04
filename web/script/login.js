$(function(){
   
    $('#login').click(function(){
        var username = $('#username').val()
        var pwd = $('#password').val()

        $.ajax({
            type: "get",
            url: "http://127.0.0.1:3000",
            data: {
                "username": username,
                "password": pwd,
                "method": "get"
            },
            dataType: "text",
            error: function(err){
                console.log('err')
            },
            success: function (data) {
                console.log(data)
            }
        })
    })
})