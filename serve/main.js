
var port = 3000

var http = require('http')

var accountRouter = require('./router/account.js')

var server = http.createServer(function (request, response) {

    // var postData = ""; //存储传输过来 的数据
    //post请求
    // request.addListener("data", function (postDataChunk) {
    //     postData += postDataChunk;
    // });
    // // 数据接收完毕，执行回调函数
    // request.addListener("end", function () {
    //     console.log('数据接收完毕');
    //     var params = querystring.parse(postData)

    //     if(true) { 
    //         var arrParams = arrAndObj.objToArr(params)
    //         mongodb.insert(arrParams)
    //     }
    // })
    
    
    // if (urlStr == urlOrign || urlStr == (urlOrign + '/')) {

    // }
    accountRouter.accountRouter(request, response)

})

server.listen(port, '127.0.0.1', function () {
    console.log("Server runing at port: " + port + ".")
});

