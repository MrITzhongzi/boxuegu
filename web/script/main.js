$(function(){
    //默认加载 yibiaopan.html页面
    $.ajax({
        type: "get",
        url: "../views/yibiaopan.html",
        dataType: "text",
        success: function (response) {
            $('.body.teacher-profile').html(response)
        }
    });
    
})