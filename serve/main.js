
var port = 3000

var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')
const querystring = require('querystring')
var mongodb = require('./datebase/mongodb')

var arrAndObj = require('./tool/arrAndObj')

var server = http.createServer(function (request, response) {

    var postData = ""; //存储传输过来 的数据

    request.addListener("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    // 数据接收完毕，执行回调函数
    request.addListener("end", function () {
        console.log('数据接收完毕');
        var params = querystring.parse(postData)

        if(true) { 
            var arrParams = arrAndObj.objToArr(params)
            mongodb.insert(arrParams)
        }
    })
    
    response.writeHead(500, {
        "Content-Type": "text/plain;charset=utf-8"
    })
    response.write('this is a demo')
    response.end('success')
})

server.listen(port);

console.log("Server runing at port: " + port + ".")