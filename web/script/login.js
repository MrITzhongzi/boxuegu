$(function(){
   
    $('#login').click(function(){
        var username = $('#username').val()
        var pwd = $('#password').val()

        $.ajax({
            type: "post",
            url: "http://127.0.0.1:3000",
            data: {
                "username": username,
                "password": pwd
            },
            dataType: "json",
            error: function(err){
                console.log('err')
            },
            success: function (response) {
                console.log(response)
            }
        });
    })
})