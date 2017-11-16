
var port = 3000

var http = require('http')

var accountRouter = require('./router/account.js')
var chooseRouter = require('./router/router')

var server = http.createServer(function (request, response) {
    
    // if (urlStr == urlOrign || urlStr == (urlOrign + '/')) {

    // }
    
    chooseRouter.chooseRouter(request, response)

})

server.listen(port, '127.0.0.1', function () {
    console.log("Server runing at port: " + port + ".")
});

